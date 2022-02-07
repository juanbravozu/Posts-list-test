import { Card, CardContent, CardHeader, Typography } from "@mui/material";


const PostCard = ({data}) => {
  if(!data) return null;
  const {id, title, body, link, user} = data;

  return (
    <Card>
      <CardHeader title={title}/>
      <CardContent>
        <Typography>
          {body}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default PostCard;