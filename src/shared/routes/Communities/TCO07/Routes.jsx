/**
 * Routing of TCO07 Community.
 */

import ContentfulRoute from 'components/Contentful/Route';
import Error404 from 'components/Error404';
import Header from 'containers/tc-communities/Header';
import PT from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import headerTheme from 'components/tc-communities/communities/tco/themes/header.scss';

export default function TCO07({ base }) {
  return (
    <Route
      component={({ match }) => (
        <div>
          <Header
            baseUrl={base}
            pageId={match.params.pageId || 'home'}
            theme={headerTheme}
          />
          <Switch>
            <ContentfulRoute
              baseUrl={base}
              error404={<Error404 />}
              id="2XWcxVALvInOlAOfROErKS"
            />
            <Route
              component={Error404}
              path={`${base}/:any`}
            />
          </Switch>
        </div>
      )}
      path={`${base}/:pageId?`}
    />
  );
}

TCO07.defaultProps = {
  base: '',
};

TCO07.propTypes = {
  base: PT.string,
};
