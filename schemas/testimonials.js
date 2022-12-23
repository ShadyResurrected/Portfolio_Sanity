// The following is a schema of the testimonial section
export default{
    name : 'testimonials',
    title : 'Testimonials',
    type : 'document',
    fields : [
        {
            name : 'name',
            title : 'Name',
            type : 'string'
        },
        {
            name : 'company',
            title : 'Company',
            type : 'string'
        },
        {
            name : 'imageurl',
            title : 'ImgURL',
            type : 'image',
            options : {
                // hotspot means that the user will be able to crop the image
                hotspot : true
            }
        },
        {
            name : 'feedback',
            title : 'Feedback',
            type : 'string'
        },
    ]
}