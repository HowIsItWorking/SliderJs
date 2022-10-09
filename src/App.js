import { useEffect, useState } from "react";
import Slider from "./components/Slider.js";

function App() {

  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    setSliderImages([
      "https://i.picsum.photos/id/550/200/200.jpg?hmac=1cWp9LPVpvHr7sCXaCMeMnsIHNCLfqPwnIkIA0GUzcM",
      "https://i.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI",
      "https://i.picsum.photos/id/535/200/200.jpg?hmac=0vK1wlOyeZ3PfsgTuPgZfCyZeBmx_aNys09auM4tXgw",
      "https://i.picsum.photos/id/800/200/200.jpg?hmac=imZ9apEK2ZrSqIrWpccZeiEbLsyJaN_nx3VrxgTkBBI",
      "https://i.picsum.photos/id/431/200/200.jpg?hmac=htJbypAbF5_h67SAU-qYOJLyDwNNHcHSfL67TITi2hc",
      "https://i.picsum.photos/id/1059/200/200.jpg?hmac=2w4ZTAuYGsSUL-ur3iVQO04H8398XxIaeLEGVBNRSLU",
      "https://i.picsum.photos/id/468/300/300.jpg?hmac=hKwR8gW6Pw7V6_udL04jWXLMY67RsRJohKxw-L_9Plw",
      "https://i.picsum.photos/id/306/800/800.jpg?hmac=o3YYNuiUwBCcoMPAXB3JUKLVPrTnSBWzdNfo6Iq0Qhw",
      "https://i.picsum.photos/id/344/1200/800.jpg?hmac=64QVj8NdRlnrkZH9BHsSa_SyzIA4Ru7U1eh-nu-qV8Q"
    ])
  },[])

  return (
    <div className="App">
      <Slider imageList={sliderImages} name="Slider Test"/>
    </div>
  );
}

export default App;
