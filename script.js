const data = [
    {
        newsLink: "#",
        newsImage: "Bwala.jpg",
        newsHeading: "Breaking News: Major Event Unfolds",
        newsAuthor: "John DEM",
        newsBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        newsCategory: "latest"
    },
    {
        newsLink: "#",
        newsImage: "M.jpg",
        newsHeading: "Technology Advances in 2025",
        newsAuthor: "Jane Smith",
        newsBody: "Pellentesque habitant morbi tristique senectus et netus.",
        newsCategory: "trending"
    },
    {
        newsLink: "#",
        newsImage: "Nigerian-Army-1280x720-1-1062x598.webp",
        newsHeading: "Nigerian Army Achieves Milestone",
        newsAuthor: "Ahmed Musa",
        newsBody: "Aenean commodo ligula eget dolor. Aenean massa.",
        newsCategory: "latest"
    },
    {
        newsLink: "#",
        newsImage: "Oil-worker-1-1062x598.jpg",
        newsHeading: "Oil Industry Updates",
        newsAuthor: "Emily Davis",
        newsBody: "Cum sociis natoque penatibus et magnis dis parturient montes.",
        newsCategory: "trending"
    },
    {
        newsLink: "#",
        newsImage: "tanjiro-kamado-3840x2160-18414.jpeg",
        newsHeading: "Anime Spotlight: Tanjiro Kamado",
        newsAuthor: "Hiro Tanaka",
        newsBody: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis.",
        newsCategory: "latest"
    },
    {
        newsLink: "#",
        newsImage: "Tinubu.jpeg",
        newsHeading: "Political News: Tinubu's Latest Speech",
        newsAuthor: "Chinwe Okafor",
        newsBody: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel.",
        newsCategory: "trending"
    },
    {
        newsLink: "#",
        newsImage: "pic.png",
        newsHeading: "Local News: Community Event Highlights",
        newsAuthor: "Michael Brown",
        newsBody: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a.",
        newsCategory: "latest"
    },
    {
        newsLink: "#",
        newsImage: "Bwala.jpg",
        newsHeading: "Sports Update: Major League Results",
        newsAuthor: "Sarah Connor",
        newsBody: "Phasellus viverra nulla ut metus varius laoreet.",
        newsCategory: "trending"
    },
    {
        newsLink: "#",
        newsImage: "M.jpg",
        newsHeading: "Health Tips for 2025",
        newsAuthor: "Dr. Alex Green",
        newsBody: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.",
        newsCategory: "latest"
    },
    {
        newsLink: "#",
        newsImage: "Nigerian-Army-1280x720-1-1062x598.webp",
        newsHeading: "Global News: International Relations",
        newsAuthor: "Linda White",
        newsBody: "Curabitur ullamcorper ultricies nisi. Nam eget dui.",
        newsCategory: "trending"
    }
];

// Dynamically add news articles to the page
function renderNews() {
    const latestContainer = document.querySelector('.latest');
    const trendingContainer = document.querySelector('.trending');

    data.forEach(news => {
        const article = document.createElement('article');

        // Create image element
        const img = document.createElement('img');
        img.src = news.newsImage;
        img.alt = news.newsHeading;

        // Create content container
        const content = document.createElement('div');
        content.classList.add('content');

        // Add heading
        const heading = document.createElement('h3');
        const link = document.createElement('a');
        link.href = news.newsLink;
        link.textContent = news.newsHeading;
        heading.appendChild(link);

        // Add author
        const author = document.createElement('p');
        author.textContent = `By ${news.newsAuthor}`;

        // Add body
        const body = document.createElement('p');
        body.textContent = news.newsBody;

        // Append elements to content
        content.appendChild(heading);
        content.appendChild(author);
        content.appendChild(body);

        // Append image and content to article
        article.appendChild(img);
        article.appendChild(content);

        // Append article to the appropriate container
        if (news.newsCategory === 'latest') {
            latestContainer.appendChild(article);
        } else if (news.newsCategory === 'trending') {
            trendingContainer.appendChild(article);
        }
    });
}

// Call the function to render news
renderNews();