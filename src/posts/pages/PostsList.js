import { Box, Fab, Pagination } from '@mui/material';
import PostCard from '../components/PostCard';
import usePosts from '../hook/usePost/usePosts';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const PostsList = () => {
  const {page, setPage, totalPages, posts} = usePosts();
  const navigate = useNavigate();

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  }
  const handleCreatePost = () => {
    navigate('/post/new');
  }
  return (
    <Box sx={{
      width: 600,
      minWidth: 320,
      maxWidth: '100vw',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: 2
    }}>
      {posts.map(data => <PostCard data={data}/>)}
      <Pagination 
        count={totalPages} 
        variant='outlined' 
        page={page} 
        onChange={handlePageChange}
        color='primary'
        sx={{
          margin: '24px auto'
        }}
      />

      <Fab 
        aria-label='create post'
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16
        }}
        color="primary"
        onClick={handleCreatePost}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default PostsList;
