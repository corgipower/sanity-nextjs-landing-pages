export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '617d96ee6ee0ab587f178a34',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s8dtnp3w',
                  apiId: '1b8e5f4d-1b41-482b-92bf-88cdd55984cd'
                },
                {
                  buildHookId: '617d96ef9159be9719e8aa90',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pswbri34',
                  apiId: 'f3900e05-3e0e-417b-a667-62d6e454be59'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/corgipower/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pswbri34.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
