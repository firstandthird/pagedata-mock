'use strict';
// an example of passing your own mock data to pagedata:
module.exports = {
  '/api/pages': {
    get: [{
      _id: 'blah',
      pageName: 'a page',
      contentYaml: '',
      site: '1234',
      slug: 'site-1-a-page'
    },
    {
      _id: 'blah',
      pageName: 'another page',
      contentYaml: '',
      site: '2222',
      slug: 'site-2-another-page'
    }]
  },
  '/api/pages?siteId=1234': {
    get: [{
      _id: 'blah',
      pageName: 'a page',
      contentYaml: '',
      slug: 'site-1-a-page',
      site: '1234'
    }]
  },
  '/api/sites': {
    get: [{
      _id: '1234',
      name: 'site 1',
      siteSlug: 'site-1'
    },
    {
      _id: '2222',
      name: 'site 2',
      siteSlug: 'site-2'
    }]
  }
};
