// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';
// import { motion } from "framer-motion";

// export default function MultiActionAreaCard({ title, description, imageUrl, buttonText }) {
//   return (
//     // ใช้ motion.div แทน Card เพื่อให้ได้แอนิเมชัน
//     <motion.div
//       whileHover={{ scale: 1.05 }} // ขยายเมื่อ hover
//       whileTap={{ scale: 0.95 }} // ย่อเมื่อคลิก
//       transition={{ type: "spring", stiffness: 400, damping: 10 }}
//     >
//       <Card sx={{ maxWidth: 300 }}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="140"
//             image={imageUrl}
//             alt={title}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {description}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             {buttonText}
//           </Button>
//         </CardActions>
//       </Card>
//     </motion.div>
//   );
// }

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { motion } from "framer-motion";

export default function MultiActionAreaCard({ title, description, imageUrl, buttonText, onClick }) {
  return (
    // ใช้ motion.div แทน Card เพื่อให้ได้แอนิเมชัน
    <motion.div
      whileHover={{ scale: 1.05 }} // ขยายเมื่อ hover
      whileTap={{ scale: 0.95 }} // ย่อเมื่อคลิก
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={onClick} // เพิ่มการจัดการคลิกที่นี่
    >
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {buttonText}
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
