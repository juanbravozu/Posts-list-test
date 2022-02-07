import usePosts from './posts/hook/usePost/usePosts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostsList from './posts/pages/PostsList';
import CreatePost from './posts/pages/CreatePost';

function App() {
  const {page, setPage, totalPages, posts} = usePosts();

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/post' element={<PostsList />}/>
        <Route path='/post/new' element={<CreatePost />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
