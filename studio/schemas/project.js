export default{
    name:"project",
    title:"Project",
    type:"document",
    fields:[
        {
            name:"title",
            type:"string"
        },
        {
            name:"date",
            type:"datetime"
        },
        {
            name:"place",
            type:"string"
        },
        {
            name:"description",
            type:"text"
        },
        {
            name:"projectType",
            title:"project Type",
            type:"string",
            options:{
                list:[
                    { value:"personal", title:"personal" },
                     { value:"Client", title:"Client" },
                      { value:"School", title:"School" },
                ]
            },
        },
        {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
       },  
        {
           name:"hostlink",
           type:"url"
        },
        {
            name:"github",
            type:"url"
        },
        {
            name:"tags",
            type:"array",
            of:[
                {
                    type:"string"
                }
            ],
            options:{
                layout:"tags"
            }
        }
    ]
}