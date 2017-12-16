/**
 * <Toolbar> Component
 * Implements a Toolbar that can control multiple <Editor> components
 */
import _ from 'lodash';
import PT from 'prop-types';
import React from 'react';
import Sticky from 'react-stickynode';

import { Button } from 'components/buttons';
import Select from 'components/Select';
// import Modal from 'components/Modal';

import {
  EditorState,
  Modifier,
  RichUtils,
} from 'draft-js';

import Connector from '../Connector';

import style from './style.scss';

/**
 * Component class, provides a Toolbar that can control multiple Editor components
 * connected to it via the Connector class
 */
export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      block: null,
      editor: null,
      markdown: false,
      linkModal: false,
      BOLD: false,
      ITALIC: false,
    };
  }

  componentDidMount() {
    this.props.connector.setToolbar(this);
  }

  componentWillReceiveProps({ connector }) {
    const prevConnector = this.props.connector;
    if (connector !== prevConnector) {
      if (prevConnector) prevConnector.setToolbar(null);
      if (connector) connector.setToolbar(this);
    }
  }

  componentWillUnmount() {
    this.props.connector.setToolbar(null);
  }

  onFocusedEditorChanged(newState) {
    const editor = this.props.connector.focusedEditor;
    if (editor) {
      const inlineStyle = newState.getCurrentInlineStyle();
      const block = RichUtils.getCurrentBlockType(newState);
      this.setState({
        editor,
        block,
        BOLD: inlineStyle.has('BOLD'),
        INLINE_CODE: inlineStyle.has('CODE'),
        ITALIC: inlineStyle.has('ITALIC'),
        UNDERLINE: inlineStyle.has('UNDERLINE'),
        STRIKETHROUGH: inlineStyle.has('STRIKETHROUGH'),
      });
    } else {
      this.setState({
        block: 'unstyled',
        editor: null,
        BOLD: false,
        INLINE_CODE: false,
        ITALIC: false,
        UNDERLINE: false,
        STRIKETHROUGH: false,
      });
    }
  }

  setBlockType(newType) {
    let editorState = this.state.editor ? this.state.editor.state.editorState : null;
    if (editorState) {
      editorState = RichUtils.toggleBlockType(editorState, newType);
      this.setState({ block: newType });
      this.state.editor.setState({ editorState });
    }
  }

  /**
   * Inserts a new link at current cursor selection.
   * @param {String} title The initial title to display for the link
   * @param {String} href The <a> href
   * @return {String} Returns the entity key, which can be stored and used to update this link
   */
  insertLink(title, href) {
    let editorState = this.state.editor ? this.state.editor.state.editorState : null;
    if (editorState) {
      let contentState = editorState.getCurrentContent();

      // If the user has a range selected, it needs to be collapsed before insertText will work
      // This sets the starting and ending range to the same position,
      // which is equivalent to just a cursor/caret
      let sel = editorState.getSelection();
      const startKey = sel.getStartKey();
      const startOffset = sel.getStartOffset();
      sel = sel.merge({
        anchorKey: startKey,
        anchorOffset: startOffset,
        focusKey: startKey,
        focusOffset: startOffset,
      });

      // Inserts a space at the cursor
      contentState = Modifier.insertText(
        contentState,
        sel,
        ' ',
        null,
        null,
      );

      // Cursor will not have been updated, so this will insert before the space
      contentState = contentState.createEntity('LINK', 'MUTABLE', { title, href });
      const key = contentState.getLastCreatedEntityKey();
      contentState = Modifier.insertText(
        contentState,
        sel,
        title,
        null,
        key,
      );

      editorState = EditorState.push(editorState, contentState, 'insert-characters');

      this.state.editor.setState({ editorState });

      return key;
    }
    return null;
  }

  /**
   * Adds a new Editor instance.
   * @param {Editor} editor
   */
  toggleInlineStyle(styleName) {
    const editor = this.state.editor;
    if (editor) {
      const editorState = RichUtils.toggleInlineStyle(
        editor.state.editorState, styleName);
      const inlineStyle = editorState.getCurrentInlineStyle();
      this.setState({ [styleName]: inlineStyle.has(styleName) });
      editor.setState({ editorState });
    }
  }

  render() {
    const st = this.state;
    const disableStyling = !st.editor;

    const createStyleButton = (label, name, active, theme) => (
      <Button
        active={active}
        disabled={disableStyling}
        onMouseDown={(e) => {
          e.preventDefault();
          this.toggleInlineStyle(name);
        }}
        size="sm"
        theme={{ button: theme }}
      >{label}</Button>
    );

    return (
      <Sticky innerZ={2}>
        <div styleName="container">

          <Button
            onClick={() => this.props.onSave()}
            size="sm"
            theme={{ button: style.save }}
          >Save</Button>
          <div styleName="separator" />

          <Button
            active={this.state.markdown}
            onMouseDown={(e) => {
              e.preventDefault();
              const active = !this.state.markdown;
              this.setState({ markdown: active });
              this.props.connector.toggleInlineMarkdown(active);
            }}
            size="sm"
            theme={{ button: style.markdown }}
          >Inline Markdown</Button>

          <div styleName="separator" />

          { createStyleButton('B', 'BOLD', st.BOLD, style.bold) }
          { createStyleButton('I', 'ITALIC', st.ITALIC, style.italic) }
          { createStyleButton('U', 'UNDERLINE', st.UNDERLINE, style.underline) }
          { createStyleButton('S', 'STRIKETHROUGH', st.STRIKETHROUGH, style.strikethrough) }
          { createStyleButton('Monospace', 'CODE', st.CODE, style.inlineCode) }

          <div styleName="separator" />

          <Button
            disabled={disableStyling}
            onMouseDown={(e) => {
              e.preventDefault();
              this.insertLink('Hover to Edit', 'http://');
            }}
            size="sm"
            theme={{ button: style.markdown }}
          >Insert Link</Button>

          <Button
            disabled={disableStyling}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
            size="sm"
            theme={{ button: style.markdown }}
          >Insert Image</Button>

          <div styleName="select-wrapper">
            <Select
              autoBlur
              clearable={false}
              className={style.select}
              disabled={disableStyling}
              onChange={option => this.setBlockType(option.value)}
              onFocus={e => e.preventDefault()}
              options={[
                {
                  label: 'Default',
                  value: 'unstyled',
                },
                {
                  label: 'Section Title',
                  value: 'header-two',
                },
                {
                  label: 'Subsection Title',
                  value: 'header-three',
                },
                {
                  label: 'List Title',
                  value: 'header-four',
                },
                {
                  label: 'Ordered List',
                  value: 'ordered-list-item',
                },
                {
                  label: 'Unordered List',
                  value: 'unordered-list-item',
                },
                {
                  label: 'Code',
                  value: 'code-block',
                },
                {
                  label: 'Blockquote',
                  value: 'blockquote',
                },
                {
                  label: 'Note',
                  value: 'note',
                },
              ]}
              placeholder="Block Style"
              value={st.editor ? st.block : null}
            />

          </div>
        </div>
      </Sticky>
    );
  }
}

Toolbar.defaultProps = {
  connector: new Connector(),
  onSave: _.noop,
};

Toolbar.propTypes = {
  connector: PT.instanceOf(Connector),
  onSave: PT.func,
};
