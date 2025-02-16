import "./App.css";
import myLogo from "./images/logo.png";
import instagramIcon from "./images/instagram.png";
import telephoneIcon from "./images/telephone.png";

function App() {
  const data = {
    categories: [
      {
        title: "Sweet Cups",
        items: [
          {
            name: "Tiramisu",
            description: "",
            price: 1.7,
          },
          {
            name: "Custard",
            description: "",
            price: 2,
          },
          {
            name: "Banana Pudding",
            description: "",
            price: 2,
          },
          {
            name: "Jello",
            description: "",
            price: 1,
          },
          {
            name: "Mhalabieh",
            description: "",
            price: 2,
          },
          {
            name: "Biscuit Au Chocolat",
            description: "",
            price: 1.7,
          },
        ],
      },
      {
        title: "Tasty Trays",
        items: [
          {
            name: "Tiramisu",
            description: "",
            price: 13,
          },
          {
            name: "Custard",
            description: "",
            price: 15,
          },
          {
            name: "Banana Pudding",
            description: "",
            price: 15,
          },
        ],
      },
      {
        title: "Cake",
        items: [
          {
            name: "Biscuit Au Chocolat S",
            description: "",
            price: 9,
          },
          {
            name: "Biscuit Au Chocolat M",
            description: "",
            price: 12,
          },
          {
            name: "Biscuit Au Chocolat L",
            description: "",
            price: 15,
          },
        ],
        quote: "",
      }
    ],
  };

  const openInstagramLink = () => {
    window.open("https://www.instagram.com/sweethomelb2025/", "_blank");
  };

  const openPhoneNumber = () => {
    const phoneNumber = "96176080117";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="main-container">
      <div className="image-container">
        <img height={350} src={myLogo} alt="logo" />
        <div className="navbar">
          Daily fresh, homemade, and delicious desserts
        </div>
      </div>
      <div className="body-container">
        {data.categories.map((category, index) => (
          <div className="menu-container" id={category.title} key={index}>
            <div className="title-container">
              <div className="title">{category.title}</div>
              <div>
                {/* {category.image && <img src={category.image} alt="waffle" height={50} />} */}
              </div>
            </div>
            <div className="quote">{category.quote}</div>
            <div className="menu-body">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="name-price-description">
                  <div className="name-price">
                    <div className="name">{item.name}</div>
                    <div className="price">${item.price}</div>
                  </div>
                  <div className="description">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="footer">
          <div className="socials-container" onClick={openInstagramLink}>
            <img
              src={instagramIcon}
              className="socials"
              alt="instagram"
              height={30}
              width={30}
            />
          </div>
          <div className="socials-container" onClick={openPhoneNumber}>
            <img
              src={telephoneIcon}
              className="socials"
              alt="telephone"
              height={30}
              width={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
