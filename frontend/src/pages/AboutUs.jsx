import React from "react";
import img1 from "./img/img1.jpg";
import "./style.css";
import Wrapper from '../components/wrapper/Wrapper'

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div className="box">
        <div className="bg">
          <img src={img1} />
        </div>
        <div className="desc">
          <h2>ABOUT US</h2>
          <p>
            <strong>CIMSI SHOP </strong>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in 
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, 
            omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
            saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
          <div className="visi">
          <h2>VISI MISI</h2>
          <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
            officia deserunt mollitia animi, id est laborum et dolorum fuga doloribus asperiores repellat."</p>
        </div>
        </div>
      </div>
      </div>
      <Wrapper />
    </>
  );
};

export default AboutUs;
