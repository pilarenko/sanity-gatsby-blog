export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5ce79bfb6051970242102cc3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nttc79ay',
                  apiId: 'cf259ca9-68d2-4f54-8c54-612c8a8fc570'
                },
                {
                  buildHookId: '5ce79bfb6873a4040d433801',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-onbaefr3',
                  apiId: '8d571656-0cfb-495f-a63d-2141a417afd3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pilarenko/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-onbaefr3.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
