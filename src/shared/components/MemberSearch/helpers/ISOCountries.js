const ISOCountries = [
  {
    alpha2: 'AF', alpha3: 'AFG', code: 4, numericString: '004', name: 'Afghanistan',
  },
  {
    alpha2: 'AX', alpha3: 'ALA', code: 248, numericString: '248', name: 'Åland Islands',
  },
  {
    alpha2: 'AL', alpha3: 'ALB', code: 8, numericString: '008', name: 'Albania',
  },
  {
    alpha2: 'DZ', alpha3: 'DZA', code: 12, numericString: '012', name: 'Algeria',
  },
  {
    alpha2: 'AS', alpha3: 'ASM', code: 16, numericString: '016', name: 'American Samoa',
  },
  {
    alpha2: 'AD', alpha3: 'AND', code: 20, numericString: '020', name: 'Andorra',
  },
  {
    alpha2: 'AO', alpha3: 'AGO', code: 24, numericString: '024', name: 'Angola',
  },
  {
    alpha2: 'AI', alpha3: 'AIA', code: 660, numericString: '660', name: 'Anguilla',
  },
  {
    alpha2: 'AQ', alpha3: 'ATA', code: 10, numericString: '010', name: 'Antarctica',
  },
  {
    alpha2: 'AG', alpha3: 'ATG', code: 28, numericString: '028', name: 'Antigua and Barbuda',
  },
  {
    alpha2: 'AR', alpha3: 'ARG', code: 32, numericString: '032', name: 'Argentina',
  },
  {
    alpha2: 'AM', alpha3: 'ARM', code: 51, numericString: '051', name: 'Armenia',
  },
  {
    alpha2: 'AW', alpha3: 'ABW', code: 533, numericString: '533', name: 'Aruba',
  },
  {
    alpha2: 'AU', alpha3: 'AUS', code: 36, numericString: '036', name: 'Australia',
  },
  {
    alpha2: 'AT', alpha3: 'AUT', code: 40, numericString: '040', name: 'Austria',
  },
  {
    alpha2: 'AZ', alpha3: 'AZE', code: 31, numericString: '031', name: 'Azerbaijan',
  },
  {
    alpha2: 'BS', alpha3: 'BHS', code: 44, numericString: '044', name: 'Bahamas',
  },
  {
    alpha2: 'BH', alpha3: 'BHR', code: 48, numericString: '048', name: 'Bahrain',
  },
  {
    alpha2: 'BD', alpha3: 'BGD', code: 50, numericString: '050', name: 'Bangladesh',
  },
  {
    alpha2: 'BB', alpha3: 'BRB', code: 52, numericString: '052', name: 'Barbados',
  },
  {
    alpha2: 'BY', alpha3: 'BLR', code: 112, numericString: '112', name: 'Belarus',
  },
  {
    alpha2: 'BE', alpha3: 'BEL', code: 56, numericString: '056', name: 'Belgium',
  },
  {
    alpha2: 'BZ', alpha3: 'BLZ', code: 84, numericString: '084', name: 'Belize',
  },
  {
    alpha2: 'BJ', alpha3: 'BEN', code: 204, numericString: '204', name: 'Benin',
  },
  {
    alpha2: 'BM', alpha3: 'BMU', code: 60, numericString: '060', name: 'Bermuda',
  },
  {
    alpha2: 'BT', alpha3: 'BTN', code: 64, numericString: '064', name: 'Bhutan',
  },
  {
    alpha2: 'BO', alpha3: 'BOL', code: 68, numericString: '068', name: 'Bolivia, Plurinational State of',
  },
  {
    alpha2: 'BQ', alpha3: 'BES', code: 535, numericString: '535', name: 'Bonaire, Sint Eustatius and Saba',
  },
  {
    alpha2: 'BA', alpha3: 'BIH', code: 70, numericString: '070', name: 'Bosnia and Herzegovina',
  },
  {
    alpha2: 'BW', alpha3: 'BWA', code: 72, numericString: '072', name: 'Botswana',
  },
  {
    alpha2: 'BV', alpha3: 'BVT', code: 74, numericString: '074', name: 'Bouvet Island',
  },
  {
    alpha2: 'BR', alpha3: 'BRA', code: 76, numericString: '076', name: 'Brazil',
  },
  {
    alpha2: 'IO', alpha3: 'IOT', code: 86, numericString: '086', name: 'British Indian Ocean Territory',
  },
  {
    alpha2: 'BN', alpha3: 'BRN', code: 96, numericString: '096', name: 'Brunei Darussalam',
  },
  {
    alpha2: 'BG', alpha3: 'BGR', code: 100, numericString: '100', name: 'Bulgaria',
  },
  {
    alpha2: 'BF', alpha3: 'BFA', code: 854, numericString: '854', name: 'Burkina Faso',
  },
  {
    alpha2: 'BI', alpha3: 'BDI', code: 108, numericString: '108', name: 'Burundi',
  },
  {
    alpha2: 'KH', alpha3: 'CPV', code: 132, numericString: '132', name: 'Cabo Verde',
  },
  {
    alpha2: 'CM', alpha3: 'KHM', code: 116, numericString: '116', name: 'Cambodia',
  },
  {
    alpha2: 'CA', alpha3: 'CMR', code: 120, numericString: '120', name: 'Cameroon',
  },
  {
    alpha2: 'CV', alpha3: 'CAN', code: 124, numericString: '124', name: 'Canada',
  },
  {
    alpha2: 'KY', alpha3: 'CYM', code: 136, numericString: '136', name: 'Cayman Islands',
  },
  {
    alpha2: 'CF', alpha3: 'CAF', code: 140, numericString: '140', name: 'Central African Republic',
  },
  {
    alpha2: 'TD', alpha3: 'TCD', code: 148, numericString: '148', name: 'Chad',
  },
  {
    alpha2: 'CL', alpha3: 'CHL', code: 152, numericString: '152', name: 'Chile',
  },
  {
    alpha2: 'CN', alpha3: 'CHN', code: 156, numericString: '156', name: 'China',
  },
  {
    alpha2: 'CX', alpha3: 'CXR', code: 162, numericString: '162', name: 'Christmas Island',
  },
  {
    alpha2: 'CC', alpha3: 'CCK', code: 166, numericString: '166', name: 'Cocos (Keeling) Islands',
  },
  {
    alpha2: 'CO', alpha3: 'COL', code: 170, numericString: '170', name: 'Colombia',
  },
  {
    alpha2: 'KM', alpha3: 'COM', code: 174, numericString: '174', name: 'Comoros',
  },
  {
    alpha2: 'CG', alpha3: 'COG', code: 178, numericString: '178', name: 'Congo',
  },
  {
    alpha2: 'CD', alpha3: 'COD', code: 180, numericString: '180', name: 'Congo, the Democratic Republic of the',
  },
  {
    alpha2: 'CK', alpha3: 'COK', code: 184, numericString: '184', name: 'Cook Islands',
  },
  {
    alpha2: 'CR', alpha3: 'CRI', code: 188, numericString: '188', name: 'Costa Rica',
  },
  {
    alpha2: 'CI', alpha3: 'CIV', code: 384, numericString: '384', name: 'Côte d\'Ivoire',
  },
  {
    alpha2: 'HR', alpha3: 'HRV', code: 191, numericString: '191', name: 'Croatia',
  },
  {
    alpha2: 'CU', alpha3: 'CUB', code: 192, numericString: '192', name: 'Cuba',
  },
  {
    alpha2: 'CW', alpha3: 'CUW', code: 531, numericString: '531', name: 'Curaçao',
  },
  {
    alpha2: 'CY', alpha3: 'CYP', code: 196, numericString: '196', name: 'Cyprus',
  },
  {
    alpha2: 'CZ', alpha3: 'CZE', code: 203, numericString: '203', name: 'Czech Republic',
  },
  {
    alpha2: 'DK', alpha3: 'DNK', code: 208, numericString: '208', name: 'Denmark',
  },
  {
    alpha2: 'DJ', alpha3: 'DJI', code: 262, numericString: '262', name: 'Djibouti',
  },
  {
    alpha2: 'DM', alpha3: 'DMA', code: 212, numericString: '212', name: 'Dominica',
  },
  {
    alpha2: 'DO', alpha3: 'DOM', code: 214, numericString: '214', name: 'Dominican Republic',
  },
  {
    alpha2: 'EC', alpha3: 'ECU', code: 218, numericString: '218', name: 'Ecuador',
  },
  {
    alpha2: 'EG', alpha3: 'EGY', code: 818, numericString: '818', name: 'Egypt',
  },
  {
    alpha2: 'SV', alpha3: 'SLV', code: 222, numericString: '222', name: 'El Salvador',
  },
  {
    alpha2: 'GQ', alpha3: 'GNQ', code: 226, numericString: '226', name: 'Equatorial Guinea',
  },
  {
    alpha2: 'ER', alpha3: 'ERI', code: 232, numericString: '232', name: 'Eritrea',
  },
  {
    alpha2: 'EE', alpha3: 'EST', code: 233, numericString: '233', name: 'Estonia',
  },
  {
    alpha2: 'ET', alpha3: 'ETH', code: 231, numericString: '231', name: 'Ethiopia',
  },
  {
    alpha2: 'FK', alpha3: 'FLK', code: 238, numericString: '238', name: 'Falkland Islands (Malvinas)',
  },
  {
    alpha2: 'FO', alpha3: 'FRO', code: 234, numericString: '234', name: 'Faroe Islands',
  },
  {
    alpha2: 'FJ', alpha3: 'FJI', code: 242, numericString: '242', name: 'Fiji',
  },
  {
    alpha2: 'FI', alpha3: 'FIN', code: 246, numericString: '246', name: 'Finland',
  },
  {
    alpha2: 'FR', alpha3: 'FRA', code: 250, numericString: '250', name: 'France',
  },
  {
    alpha2: 'GF', alpha3: 'GUF', code: 254, numericString: '254', name: 'French Guiana',
  },
  {
    alpha2: 'PF', alpha3: 'PYF', code: 258, numericString: '258', name: 'French Polynesia',
  },
  {
    alpha2: 'TF', alpha3: 'ATF', code: 260, numericString: '260', name: 'French Southern Territories',
  },
  {
    alpha2: 'GA', alpha3: 'GAB', code: 266, numericString: '266', name: 'Gabon',
  },
  {
    alpha2: 'GM', alpha3: 'GMB', code: 270, numericString: '270', name: 'Gambia',
  },
  {
    alpha2: 'GE', alpha3: 'GEO', code: 268, numericString: '268', name: 'Georgia',
  },
  {
    alpha2: 'DE', alpha3: 'DEU', code: 276, numericString: '276', name: 'Germany',
  },
  {
    alpha2: 'GH', alpha3: 'GHA', code: 288, numericString: '288', name: 'Ghana',
  },
  {
    alpha2: 'GI', alpha3: 'GIB', code: 292, numericString: '292', name: 'Gibraltar',
  },
  {
    alpha2: 'GR', alpha3: 'GRC', code: 300, numericString: '300', name: 'Greece',
  },
  {
    alpha2: 'GL', alpha3: 'GRL', code: 304, numericString: '304', name: 'Greenland',
  },
  {
    alpha2: 'GD', alpha3: 'GRD', code: 308, numericString: '308', name: 'Grenada',
  },
  {
    alpha2: 'GP', alpha3: 'GLP', code: 312, numericString: '312', name: 'Guadeloupe',
  },
  {
    alpha2: 'GU', alpha3: 'GUM', code: 316, numericString: '316', name: 'Guam',
  },
  {
    alpha2: 'GT', alpha3: 'GTM', code: 320, numericString: '320', name: 'Guatemala',
  },
  {
    alpha2: 'GG', alpha3: 'GGY', code: 831, numericString: '831', name: 'Guernsey',
  },
  {
    alpha2: 'GN', alpha3: 'GIN', code: 324, numericString: '324', name: 'Guinea',
  },
  {
    alpha2: 'GW', alpha3: 'GNB', code: 624, numericString: '624', name: 'Guinea-Bissau',
  },
  {
    alpha2: 'GY', alpha3: 'GUY', code: 328, numericString: '328', name: 'Guyana',
  },
  {
    alpha2: 'HT', alpha3: 'GTI', code: 332, numericString: '332', name: 'Haiti',
  },
  {
    alpha2: 'HM', alpha3: 'GMD', code: 334, numericString: '334', name: 'Heard Island and McDonald Islands',
  },
  {
    alpha2: 'VA', alpha3: 'VAT', code: 336, numericString: '336', name: 'Holy See (Vatican City State)',
  },
  {
    alpha2: 'HN', alpha3: 'HND', code: 340, numericString: '340', name: 'Honduras',
  },
  {
    alpha2: 'HK', alpha3: 'HKG', code: 344, numericString: '344', name: 'Hong Kong',
  },
  {
    alpha2: 'HU', alpha3: 'HUN', code: 348, numericString: '348', name: 'Hungary',
  },
  {
    alpha2: 'IS', alpha3: 'ISL', code: 352, numericString: '352', name: 'Iceland',
  },
  {
    alpha2: 'IN', alpha3: 'IND', code: 356, numericString: '356', name: 'India',
  },
  {
    alpha2: 'ID', alpha3: 'IDN', code: 360, numericString: '360', name: 'Indonesia',
  },
  {
    alpha2: 'IR', alpha3: 'IRN', code: 364, numericString: '364', name: 'Iran, Islamic Republic of',
  },
  {
    alpha2: 'IQ', alpha3: 'IRQ', code: 368, numericString: '368', name: 'Iraq',
  },
  {
    alpha2: 'IE', alpha3: 'IRL', code: 372, numericString: '372', name: 'Ireland',
  },
  {
    alpha2: 'IM', alpha3: 'IMN', code: 833, numericString: '833', name: 'Isle of Man',
  },
  {
    alpha2: 'IL', alpha3: 'ISR', code: 376, numericString: '376', name: 'Israel',
  },
  {
    alpha2: 'IT', alpha3: 'ITA', code: 380, numericString: '380', name: 'Italy',
  },
  {
    alpha2: 'JM', alpha3: 'JAM', code: 388, numericString: '388', name: 'Jamaica',
  },
  {
    alpha2: 'JP', alpha3: 'JPN', code: 392, numericString: '392', name: 'Japan',
  },
  {
    alpha2: 'JE', alpha3: 'JEY', code: 832, numericString: '832', name: 'Jersey',
  },
  {
    alpha2: 'JO', alpha3: 'JOR', code: 400, numericString: '400', name: 'Jordan',
  },
  {
    alpha2: 'KZ', alpha3: 'KAZ', code: 398, numericString: '398', name: 'Kazakhstan',
  },
  {
    alpha2: 'KE', alpha3: 'KEN', code: 404, numericString: '404', name: 'Kenya',
  },
  {
    alpha2: 'KI', alpha3: 'KIR', code: 296, numericString: '296', name: 'Kiribati',
  },
  {
    alpha2: 'KP', alpha3: 'PRK', code: 408, numericString: '408', name: 'Korea, Democratic People\'s Republic of',
  },
  {
    alpha2: 'KR', alpha3: 'KOR', code: 410, numericString: '410', name: 'Korea, Republic of',
  },
  {
    alpha2: 'KW', alpha3: 'KWT', code: 414, numericString: '414', name: 'Kuwait',
  },
  {
    alpha2: 'KG', alpha3: 'KGZ', code: 417, numericString: '417', name: 'Kyrgyzstan',
  },
  {
    alpha2: 'LA', alpha3: 'LAO', code: 418, numericString: '418', name: 'Lao People\'s Democratic Republic',
  },
  {
    alpha2: 'LV', alpha3: 'LVA', code: 428, numericString: '428', name: 'Latvia',
  },
  {
    alpha2: 'LB', alpha3: 'LBN', code: 422, numericString: '422', name: 'Lebanon',
  },
  {
    alpha2: 'LS', alpha3: 'LSO', code: 426, numericString: '426', name: 'Lesotho',
  },
  {
    alpha2: 'LR', alpha3: 'LBR', code: 430, numericString: '430', name: 'Liberia',
  },
  {
    alpha2: 'LY', alpha3: 'LBY', code: 434, numericString: '434', name: 'Libya',
  },
  {
    alpha2: 'LI', alpha3: 'LIE', code: 438, numericString: '438', name: 'Liechtenstein',
  },
  {
    alpha2: 'LT', alpha3: 'LTU', code: 440, numericString: '440', name: 'Lithuania',
  },
  {
    alpha2: 'LU', alpha3: 'LUX', code: 442, numericString: '442', name: 'Luxembourg',
  },
  {
    alpha2: 'MO', alpha3: 'MAC', code: 446, numericString: '446', name: 'Macao',
  },
  {
    alpha2: 'MK', alpha3: 'MKD', code: 807, numericString: '807', name: 'Macedonia, the former Yugoslav Republic of',
  },
  {
    alpha2: 'MG', alpha3: 'MDG', code: 450, numericString: '450', name: 'Madagascar',
  },
  {
    alpha2: 'MW', alpha3: 'MWI', code: 454, numericString: '454', name: 'Malawi',
  },
  {
    alpha2: 'MY', alpha3: 'MYS', code: 458, numericString: '458', name: 'Malaysia',
  },
  {
    alpha2: 'MV', alpha3: 'MDV', code: 462, numericString: '462', name: 'Maldives',
  },
  {
    alpha2: 'ML', alpha3: 'MLI', code: 466, numericString: '466', name: 'Mali',
  },
  {
    alpha2: 'MT', alpha3: 'MLT', code: 470, numericString: '470', name: 'Malta',
  },
  {
    alpha2: 'MH', alpha3: 'MHL', code: 584, numericString: '584', name: 'Marshall Islands',
  },
  {
    alpha2: 'MQ', alpha3: 'MTQ', code: 474, numericString: '474', name: 'Martinique',
  },
  {
    alpha2: 'MR', alpha3: 'MRT', code: 478, numericString: '478', name: 'Mauritania',
  },
  {
    alpha2: 'MU', alpha3: 'MUS', code: 480, numericString: '480', name: 'Mauritius',
  },
  {
    alpha2: 'YT', alpha3: 'MYT', code: 175, numericString: '175', name: 'Mayotte',
  },
  {
    alpha2: 'MX', alpha3: 'MEX', code: 484, numericString: '484', name: 'Mexico',
  },
  {
    alpha2: 'FM', alpha3: 'FSM', code: 583, numericString: '583', name: 'Micronesia, Federated States of',
  },
  {
    alpha2: 'MD', alpha3: 'MDA', code: 498, numericString: '498', name: 'Moldova, Republic of',
  },
  {
    alpha2: 'MC', alpha3: 'MCO', code: 492, numericString: '492', name: 'Monaco',
  },
  {
    alpha2: 'MN', alpha3: 'MNG', code: 496, numericString: '496', name: 'Mongolia',
  },
  {
    alpha2: 'ME', alpha3: 'MNE', code: 499, numericString: '499', name: 'Montenegro',
  },
  {
    alpha2: 'MS', alpha3: 'MSR', code: 500, numericString: '500', name: 'Montserrat',
  },
  {
    alpha2: 'MA', alpha3: 'MAR', code: 504, numericString: '504', name: 'Morocco',
  },
  {
    alpha2: 'MZ', alpha3: 'MOZ', code: 508, numericString: '508', name: 'Mozambique',
  },
  {
    alpha2: 'MM', alpha3: 'MMR', code: 104, numericString: '104', name: 'Myanmar',
  },
  {
    alpha2: 'NA', alpha3: 'NAM', code: 516, numericString: '516', name: 'Namibia',
  },
  {
    alpha2: 'NR', alpha3: 'NRU', code: 520, numericString: '520', name: 'Nauru',
  },
  {
    alpha2: 'NP', alpha3: 'NPL', code: 524, numericString: '524', name: 'Nepal',
  },
  {
    alpha2: 'NL', alpha3: 'NLD', code: 528, numericString: '528', name: 'Netherlands',
  },
  {
    alpha2: 'NC', alpha3: 'NCL', code: 540, numericString: '540', name: 'New Caledonia',
  },
  {
    alpha2: 'NZ', alpha3: 'NZL', code: 554, numericString: '554', name: 'New Zealand',
  },
  {
    alpha2: 'NI', alpha3: 'NIC', code: 558, numericString: '558', name: 'Nicaragua',
  },
  {
    alpha2: 'NE', alpha3: 'NER', code: 562, numericString: '562', name: 'Niger',
  },
  {
    alpha2: 'NG', alpha3: 'NGA', code: 566, numericString: '566', name: 'Nigeria',
  },
  {
    alpha2: 'NU', alpha3: 'NIU', code: 570, numericString: '570', name: 'Niue',
  },
  {
    alpha2: 'NF', alpha3: 'NFK', code: 574, numericString: '574', name: 'Norfolk Island',
  },
  {
    alpha2: 'MP', alpha3: 'MNP', code: 580, numericString: '580', name: 'Northern Mariana Islands',
  },
  {
    alpha2: 'NO', alpha3: 'NOR', code: 578, numericString: '578', name: 'Norway',
  },
  {
    alpha2: 'OM', alpha3: 'OMN', code: 512, numericString: '512', name: 'Oman',
  },
  {
    alpha2: 'PK', alpha3: 'PAK', code: 586, numericString: '586', name: 'Pakistan',
  },
  {
    alpha2: 'PW', alpha3: 'PLW', code: 585, numericString: '585', name: 'Palau',
  },
  {
    alpha2: 'PS', alpha3: 'PSE', code: 275, numericString: '275', name: 'Palestine, State of',
  },
  {
    alpha2: 'PA', alpha3: 'PAN', code: 591, numericString: '591', name: 'Panama',
  },
  {
    alpha2: 'PG', alpha3: 'PNG', code: 598, numericString: '598', name: 'Papua New Guinea',
  },
  {
    alpha2: 'PY', alpha3: 'PRY', code: 600, numericString: '600', name: 'Paraguay',
  },
  {
    alpha2: 'PE', alpha3: 'PER', code: 604, numericString: '604', name: 'Peru',
  },
  {
    alpha2: 'PH', alpha3: 'PHL', code: 608, numericString: '608', name: 'Philippines',
  },
  {
    alpha2: 'PN', alpha3: 'PCN', code: 612, numericString: '612', name: 'Pitcairn',
  },
  {
    alpha2: 'PL', alpha3: 'POL', code: 616, numericString: '616', name: 'Poland',
  },
  {
    alpha2: 'PT', alpha3: 'PRT', code: 620, numericString: '620', name: 'Portugal',
  },
  {
    alpha2: 'PR', alpha3: 'PRI', code: 630, numericString: '630', name: 'Puerto Rico',
  },
  {
    alpha2: 'QA', alpha3: 'QAT', code: 634, numericString: '634', name: 'Qatar',
  },
  {
    alpha2: 'RE', alpha3: 'REU', code: 638, numericString: '638', name: 'Réunion',
  },
  {
    alpha2: 'RO', alpha3: 'ROU', code: 642, numericString: '642', name: 'Romania',
  },
  {
    alpha2: 'RU', alpha3: 'RUS', code: 643, numericString: '643', name: 'Russian Federation',
  },
  {
    alpha2: 'RW', alpha3: 'RWA', code: 646, numericString: '646', name: 'Rwanda',
  },
  {
    alpha2: 'BL', alpha3: 'BLM', code: 652, numericString: '652', name: 'Saint Barthélemy',
  },
  {
    alpha2: 'SH', alpha3: 'SHN', code: 654, numericString: '654', name: 'Saint Helena, Ascension and Tristan da Cunha',
  },
  {
    alpha2: 'KN', alpha3: 'KNA', code: 659, numericString: '659', name: 'Saint Kitts and Nevis',
  },
  {
    alpha2: 'LC', alpha3: 'LCA', code: 662, numericString: '662', name: 'Saint Lucia',
  },
  {
    alpha2: 'MF', alpha3: 'MAF', code: 663, numericString: '663', name: 'Saint Martin (French part)',
  },
  {
    alpha2: 'PM', alpha3: 'SPM', code: 666, numericString: '666', name: 'Saint Pierre and Miquelon',
  },
  {
    alpha2: 'VC', alpha3: 'VCT', code: 670, numericString: '670', name: 'Saint Vincent and the Grenadines',
  },
  {
    alpha2: 'WS', alpha3: 'WSM', code: 882, numericString: '882', name: 'Samoa',
  },
  {
    alpha2: 'SM', alpha3: 'SMR', code: 674, numericString: '674', name: 'San Marino',
  },
  {
    alpha2: 'ST', alpha3: 'STP', code: 678, numericString: '678', name: 'Sao Tome and Principe',
  },
  {
    alpha2: 'SA', alpha3: 'SAU', code: 682, numericString: '682', name: 'Saudi Arabia',
  },
  {
    alpha2: 'SN', alpha3: 'SEN', code: 686, numericString: '686', name: 'Senegal',
  },
  {
    alpha2: 'RS', alpha3: 'SRB', code: 688, numericString: '688', name: 'Serbia',
  },
  {
    alpha2: 'SC', alpha3: 'SYC', code: 690, numericString: '690', name: 'Seychelles',
  },
  {
    alpha2: 'SL', alpha3: 'SLE', code: 694, numericString: '694', name: 'Sierra Leone',
  },
  {
    alpha2: 'SG', alpha3: 'SGP', code: 702, numericString: '702', name: 'Singapore',
  },
  {
    alpha2: 'SX', alpha3: 'SXM', code: 534, numericString: '534', name: 'Sint Maarten (Dutch part)',
  },
  {
    alpha2: 'SK', alpha3: 'SVK', code: 703, numericString: '703', name: 'Slovakia',
  },
  {
    alpha2: 'SI', alpha3: 'SVN', code: 705, numericString: '705', name: 'Slovenia',
  },
  {
    alpha2: 'SB', alpha3: 'SLB', code: 90, numericString: '090', name: 'Solomon Islands',
  },
  {
    alpha2: 'SO', alpha3: 'SOM', code: 706, numericString: '706', name: 'Somalia',
  },
  {
    alpha2: 'ZA', alpha3: 'ZAF', code: 710, numericString: '710', name: 'South Africa',
  },
  {
    alpha2: 'GS', alpha3: 'SGS', code: 239, numericString: '239', name: 'South Georgia and the South Sandwich Islands',
  },
  {
    alpha2: 'SS', alpha3: 'SSD', code: 728, numericString: '728', name: 'South Sudan',
  },
  {
    alpha2: 'ES', alpha3: 'ESP', code: 724, numericString: '724', name: 'Spain',
  },
  {
    alpha2: 'LK', alpha3: 'LKA', code: 144, numericString: '144', name: 'Sri Lanka',
  },
  {
    alpha2: 'SD', alpha3: 'SDN', code: 729, numericString: '729', name: 'Sudan',
  },
  {
    alpha2: 'SR', alpha3: 'SUR', code: 740, numericString: '740', name: 'Suriname',
  },
  {
    alpha2: 'SJ', alpha3: 'SJM', code: 744, numericString: '744', name: 'Svalbard and Jan Mayen',
  },
  {
    alpha2: 'SZ', alpha3: 'SWZ', code: 748, numericString: '748', name: 'Swaziland',
  },
  {
    alpha2: 'SE', alpha3: 'SWE', code: 752, numericString: '752', name: 'Sweden',
  },
  {
    alpha2: 'CH', alpha3: 'CHE', code: 756, numericString: '756', name: 'Switzerland',
  },
  {
    alpha2: 'SY', alpha3: 'SYR', code: 760, numericString: '760', name: 'Syrian Arab Republic',
  },
  {
    alpha2: 'TW', alpha3: 'TWN', code: 158, numericString: '158', name: 'Taiwan',
  },
  {
    alpha2: 'TJ', alpha3: 'TJK', code: 762, numericString: '762', name: 'Tajikistan',
  },
  {
    alpha2: 'TZ', alpha3: 'TZA', code: 834, numericString: '834', name: 'Tanzania, United Republic of',
  },
  {
    alpha2: 'TH', alpha3: 'THA', code: 764, numericString: '764', name: 'Thailand',
  },
  {
    alpha2: 'TL', alpha3: 'TLS', code: 626, numericString: '626', name: 'Timor-Leste',
  },
  {
    alpha2: 'TG', alpha3: 'TGO', code: 768, numericString: '768', name: 'Togo',
  },
  {
    alpha2: 'TK', alpha3: 'TKL', code: 772, numericString: '772', name: 'Tokelau',
  },
  {
    alpha2: 'TO', alpha3: 'TON', code: 776, numericString: '776', name: 'Tonga',
  },
  {
    alpha2: 'TT', alpha3: 'TTO', code: 780, numericString: '780', name: 'Trinidad and Tobago',
  },
  {
    alpha2: 'TN', alpha3: 'TUN', code: 788, numericString: '788', name: 'Tunisia',
  },
  {
    alpha2: 'TR', alpha3: 'TUR', code: 792, numericString: '792', name: 'Turkey',
  },
  {
    alpha2: 'TM', alpha3: 'TKM', code: 795, numericString: '795', name: 'Turkmenistan',
  },
  {
    alpha2: 'TC', alpha3: 'TCA', code: 796, numericString: '796', name: 'Turks and Caicos Islands',
  },
  {
    alpha2: 'TV', alpha3: 'TUV', code: 798, numericString: '798', name: 'Tuvalu',
  },
  {
    alpha2: 'UG', alpha3: 'UGA', code: 800, numericString: '800', name: 'Uganda',
  },
  {
    alpha2: 'UA', alpha3: 'UKR', code: 804, numericString: '804', name: 'Ukraine',
  },
  {
    alpha2: 'AE', alpha3: 'ARE', code: 784, numericString: '784', name: 'United Arab Emirates',
  },
  {
    alpha2: 'GB', alpha3: 'GBR', code: 826, numericString: '826', name: 'United Kingdom',
  },
  {
    alpha2: 'US', alpha3: 'USA', code: 840, numericString: '840', name: 'United States',
  },
  {
    alpha2: 'UM', alpha3: 'UMI', code: 581, numericString: '581', name: 'United States Minor Outlying Islands',
  },
  {
    alpha2: 'UY', alpha3: 'URY', code: 858, numericString: '858', name: 'Uruguay',
  },
  {
    alpha2: 'UZ', alpha3: 'UZB', code: 860, numericString: '860', name: 'Uzbekistan',
  },
  {
    alpha2: 'VU', alpha3: 'VUT', code: 548, numericString: '548', name: 'Vanuatu',
  },
  {
    alpha2: 'VE', alpha3: 'VEN', code: 862, numericString: '862', name: 'Venezuela, Bolivarian Republic of',
  },
  {
    alpha2: 'VN', alpha3: 'VNM', code: 704, numericString: '704', name: 'Viet Nam',
  },
  {
    alpha2: 'VG', alpha3: 'VGB', code: 92, numericString: '092', name: 'Virgin Islands, British',
  },
  {
    alpha2: 'VI', alpha3: 'VIR', code: 850, numericString: '850', name: 'Virgin Islands, U.S.',
  },
  {
    alpha2: 'WF', alpha3: 'WLF', code: 876, numericString: '876', name: 'Wallis and Futuna',
  },
  {
    alpha2: 'EH', alpha3: 'ESH', code: 732, numericString: '732', name: 'Western Sahara',
  },
  {
    alpha2: 'YE', alpha3: 'YEM', code: 887, numericString: '887', name: 'Yemen',
  },
  {
    alpha2: 'ZM', alpha3: 'ZMB', code: 894, numericString: '894', name: 'Zambia',
  },
  {
    alpha2: 'ZW', alpha3: 'ZWE', code: 716, numericString: '716', name: 'Zimbabwe',
  },
];

export default ISOCountries;