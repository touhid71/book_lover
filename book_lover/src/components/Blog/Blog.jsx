import PropTypes from 'prop-types';

const Blog = ({blog}) => {
   const {title} =blog;
    return (
        <div>
            <h2 className="4-xl">{title}</h2>
        </div>
    );
};
Blog.PropTypes = {
    blog:PropTypes.object.isRequired
}
export default Blog;