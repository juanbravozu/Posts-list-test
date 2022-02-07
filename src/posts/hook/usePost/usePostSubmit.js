import { BASE_URL } from "../../../utils/baseConfig";

export default function usePostSubmit() {
  function createPost(title, body) {
    return fetch(`${BASE_URL}posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, body})
    })
  }

  return createPost;
}