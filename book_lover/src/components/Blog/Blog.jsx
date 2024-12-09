import PropTypes from "prop-types";

const Blog = ({ blog }) => {
    const { title, cover, author, author_img, reading_time,posted_date,hash_tag } = blog;
    return (
        <div>
            <img className= "w-full" src={cover} alt={`Cover Pic Of The Title ${title}`} />
            <div className="flex justify-between">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                       <h3 className="2xl">{author}</h3> 
                       <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}Min Read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
               {
                hash_tag.map((hash ,i) => <span key={i}><a href="">{hash}</a></span>)
               }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        author_img: PropTypes.string.isRequired, // Ensure that author_img is passed as a string
    }).isRequired,
};
export default Blog;
