import PropTypes from 'prop-types';

const Blog = ({blog}) => {
   const {title ,cover,author_img} =blog;
    return (
        <div>
    <h2 className="4-xl">{title}</h2>
    <img src={author_img} alt="" className="w-12 h-12 " />
    <img src={cover} alt={`Cover Pic Of The Title ${title}`} />
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