const posts = [
    {
        id:1,
        title: "What Building This Portfolio Taught Me",
        date: "2026-03-12",
        slug: "what-building-this-portfolio-taught-me",
        excerpt: "What I realized and what went well.",
        content: `One thing I realized is that creating css files takes so long and creating one for each page takes even longer. 
        I feel like having a global css file doesn't make sense either because of how many different class names you're creating but at least I discovered pills and I did take advantage of those.
        If you haven't noticed I used them quite a few times. They just look really cool! So I suppose that went well for me!  `,
        tags: ["CSS", "Pills"]
    },
        {
        id:2,
        title: "What I Noticed About React Router",
        date: "2026-03-12",
        slug: "what-i-noticed-about-react-router",
        excerpt: "The ease of use I noicted about React Router.",
        content: `I noticed that React Router is simple to be able to link this together so instead of using href I can just name the tag Link and it links me to where I want to go.
        I found that super useful and easy to use and understand. I didn't even know it existed before this project because I was used to href and although I still use it to reference images, I used Link much more. `,
        tags: ["React Router", "Link"]
    },
    {
        id:3,
        title: "My Current Favorite Helping Tool For Coding",
        date: "2026-03-12",
        slug: "my-current-favorite-helping-tool-for-coding",
        excerpt: "How ChatGPT helps me.",
        content: ` Currently My favorite helping tool for coding and researching is ChatGPT and I know it isn't as advanced as other AI's (Claude) but it gets the job done for me and I'm honestly grateful for that.
        I only recently started using it and I feel like I've learned more about concepts and coding with it's help. My favorite thing to do is have it help me debug.
        I usually will write something out and when I get an error and it's something that doesn't make sense to me I send it to Chat and it pops up with a quick answer and that alone has saved me so much time and that's why it's my favorite helping tool at the moment.`,
        tags: ["ChatGPT", "AI"]
    }
];

export default posts;