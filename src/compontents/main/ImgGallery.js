
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { BsSuitHeartFill } from 'react-icons/bs';

import "../styles/StyleImgGallery.scss";

import Häst1 from "../assets/häst1.png";
import Hund1 from "../assets/hund1.png";
import Hund2 from "../assets/hund2.png";
import Hund3 from "../assets/hund3.png";
import Katt1 from "../assets/katt1.png";
import Katt2 from "../assets/katt2.png";
import Häst2 from "../assets/häst2.png";
import Elefant1 from "../assets/elefant1.png";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (

    <div className="imgGalleryBackground ">

      <div class="aboutMeDivTwo">
        <div class="text-content">
        <h2 class="textStyle">FotoGalleri</h2>
          <p>Jag älskar verkligen att fotografera. Här är några av bilderna jag tagit under åren.</p> <br />
          <p>Det är mina älskade djur som agerar modeller<BsSuitHeartFill/>. <br />
          (Förutom elefanterna)</p>
        </div>
          <ImageList
            sx={{ width: 700, height: 'auto'}}
            variant="quilted"
            cols={4}
            rowHeight={134}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>


  
  
  );
}

const itemData = [
  {
    img: Hund2,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: Katt1,
    title: 'Fern',
  },
  {
    img: Elefant1,
    title: 'Fern',
  },
  {
    img: Hund3,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: Katt2,
    title: 'Tomato basil',
  },
  {
    img: Hund1,
    title: 'Sea star',
  },
  {
    img: Häst1,
    title: 'horse1',
    cols: 2,
  },
  {
    img: Häst2,
    title: 'horse1',
    cols: 2,
  },
];