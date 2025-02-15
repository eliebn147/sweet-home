import "./App.css";
import myLogo from "./images/logo.png";
import instagramIcon from "./images/instagram.png";
import facebookIcon from "./images/facebook.png";
import tiktokIcon from "./images/tik-tok.png";
import telephoneIcon from "./images/telephone.png";

function App() {
  const data = {
    categories: [
      {
        title: "Crepes",
        image: require("./images/crepe.png"),
        items: [
          {
            name: "Nutella crepe",
            description: "",
            price: 5,
          },
          {
            name: "Nutella Oreo crepe",
            description: "",
            price: 5,
          },
          {
            name: "Crepe Kinder",
            description: "",
            price: 5,
          },
          {
            name: "Crunchy lotus crepe",
            description: "",
            price: 5.25,
          },
          {
            name: "Crepe Hershey’s",
            description: "",
            price: 6.5,
          },
          {
            name: "Lotus white chocolate strawberry",
            description: "",
            price: 6.5,
          },
          {
            name: "Crepe double Hershey’s",
            description: "",
            price: 6.5,
          },
          {
            name: "Double Hershey’s & kinder Crepe",
            description: "",
            price: 7.5,
          },
          {
            name: "Crepe Maltesers",
            description: "",
            price: 6,
          },
          {
            name: "Addiction crepe",
            description: "",
            price: 6,
          },
          {
            name: "Fruit Crepe",
            description: "",
            price: 6,
          },
          {
            name: "Strawberry Cheesecake Crepe",
            description: "",
            price: 8,
          }
          //   ,
          //   {
          //     "name": "Crepe it Your Way",
          //     "description": "(Your choice of spread and of fruits or filling)",
          //     "price": 4
          //   }
        ],
        quote: "Anything is good if it is made of chocolate!",
      },
      {
        title: "Waffles",
        image: require("./images/waffle.png"),
        items: [
          {
            name: "Nutella Waffle",
            description: "",
            price: 5.5,
          },
          {
            name: "Oreo Waffle",
            description: "",
            price: 6.5,
          },
          {
            name: "Nutella kinder Waffle",
            description: "",
            price: 6.5,
          },
          {
            name: "Nutella kinder Bueno Waffle",
            description: "",
            price: 6.5,
          },
          {
            name: "Nutella Hershey’s Waffle",
            description: "",
            price: 7,
          },
          {
            name: "Triple Chocolate Waffle",
            description: "",
            price: 8,
          },
          {
            name: "S'mores Waffle",
            description: "",
            price: 8,
          },
          {
            name: "Maltesers Waffle",
            description: "",
            price: 6.5,
          },
          {
            name: "Addiction Waffle",
            description: "",
            price: 10,
          },
          {
            name: "Fruit Waffle",
            description: "",
            price: 7,
          },
          //   ,
          //   {
          //     "name": "Waffle it your Way",
          //     "description": "(Check the Toppings/Sides section)",
          //     "price": 4
          //   }
        ],
        quote: "Friends, Waffles and work ... Work is the Third;)",
      },
      {
        title: "Waffle Stick",
        image: require("./images/stick-waffle.png"),
        items: [
          {
            name: "Waffle served on a stick decorated with your choice of chocolate or spread and of Toppings and side sauce",
            description: "(Check the Toppings and the side section)",
            price: 3,
          },
        ],
        quote: "",
      },
      // {
      //   title: "Bubble Waffle",
      //   image: require("./images/bubble-waffle.png"),
      //   items: [
      //     {
      //       name: "Build your own bubble waffle by choosing your base, your ice-cream or spread, your toppings and your sauce",
      //       description:
      //         "(Check the Toppings and the side section, Toppings and Sides charged seperatly)",
      //       price: 3.5,
      //     },
      //   ],
      //   quote: "",
      // },
      {
        title: "Pancakes",
        image: require("./images/pancakes.png"),
        items: [
          {
            name: "English pancakes",
            description: "",
            price: 4.5,
          },
          {
            name: "Pancakes with fruits",
            description: "",
            price: 5.5,
          },
          {
            name: "Addiction pancakes",
            description: "",
            price: 7,
          },
          {
            name: "Nutella pancakes",
            description: "",
            price: 5,
          },
          {
            name: "Make your own (Check the Toppings and the side section)",
            description: "",
            price: "",
          },
        ],
        quote: "I am going to have Pancakes with a side Pancake!",
      },
      {
        title: "Mini Pancakes",
        image: require("./images/mini-pancakes.png"),
        items: [
          {
            name: "Mini Nutella",
            description: "",
            price: 6,
          },
          {
            name: "Mini Lotus",
            description: "",
            price: 6,
          },
          {
            name: "Mini Oreo",
            description: "",
            price: 6,
          },
          {
            name: "Mini Strawberry Cheescake",
            description: "",
            price: 6,
          }
        ],
        quote: "",
      },
      {
        title: "Signature Items",
        image: require("./images/signature.png"),
        items: [
          {
           name: "Crunchy Bliss", 
            description: "",
            price: 8,
          },
          {
            name: "Sushi boat (12 pieces)",
            description: "",
            price: 8.5,
          },
          {
            name: "Sushi boat (30 pieces)",
            description: "",
            price: 18,
          },
          {
            name: "Addiction’s Fettuccini Crepe",
            description: "",
            price: 6.5,
          },
          {
            name: "S’mores dip",
            description: "",
            price: 5,
          },
          {
            name: "S’mores Pizza",
            description: "",
            price: 7,
          },
          {
            name: "Addiction special pizza",
            description: "",
            price: 10,
          },
          {
            name: "Nutella Pizza (add your own toppings)",
            description: "",
            price: 6.5,
          },
          {
            name: "Fitness Cup",
            description: "",
            price: 4,
          },
          {
            name: "Oreo Twist Cup",
            description: "",
            price: 5,
          },
        ],
        quote: "No More rooms for dessert said no one ever",
      },
      {
        title: "Cocktails",
        image: require("./images/cocktail.png"),
        items: [
          {
            name: "Fruit Cocktail",
            description: "",
            price: "3.5 - $4.5",
          },
          {
            name: "Exotic Fruits Cocktail",
            description: "",
            price: "5 - $6.5",
          },
          {
            name: "Double Layered Cocktail",
            description: "",
            price: "6 - $7.5",
          },
          {
            name: "Avocado Cocktail",
            description: "",
            price: "5 - $6",
          },
          {
            name: "Addiction Special Cocktail (avocado, strawberry and chocolate sauce)",
            description: "",
            price: "6.5 - $7.5",
          },
        ],
        quote: "Enjoy the Fruity side of life",
      },
      {
        title: "Smoothies",
        image: require("./images/smoothie.png"),
        items: [
          {
            name: "Mango smoothie",
            description: "",
            price: 2,
          },
          {
            name: "Mango passion fruit",
            description: "",
            price: 3,
          },
          {
            name: "Mango strawberry smoothie",
            description: "",
            price: 3,
          },
          {
            name: "Strawberry",
            description: "",
            price: 2,
          },
          {
            name: "Forest Fruit smoothie",
            description: "",
            price: 2,
          },
          {
            name: "Lychee smoothie",
            description: "",
            price: 2,
          },
          {
            name: "Addiction Lemonade smoothie",
            description: "",
            price: 2,
          },
        ],
        quote: "",
      },
      {
        title: "Shakes",
        image: require("./images/milkshake.png"),
        items: [
          {
            name: "Chocolate Shake",
            description: "",
            price: 2,
          },
          {
            name: "Oreo Shake",
            description: "",
            price: 2,
          },
          {
            name: "Cerelac Shake",
            description: "",
            price: 4,
          },
          {
            name: "Strawberry Shake",
            description: "(Feel Free to add Your toppings!!)",
            price: 2,
          },
        ],
        quote: "",
      },
      {
        title: "Toppings",
        image: require("./images/toppings.png"),
        quote: "",
        items: [
          {
            name: "Maltesers",
            description: "",
            price: 1,
          },
          {
            name: "Oreo",
            description: "",
            price: 0.5,
          },
          {
            name: "Biscolatta sticks",
            description: "",
            price: 0.3,
          },
          {
            name: "Lotus",
            description: "",
            price: 0.5,
          },
          {
            name: "Kinder",
            description: "",
            price: 0.5,
          },
          {
            name: "Kinder Bueno",
            description: "",
            price: 1,
          },
          {
            name: "Hershey’s (white or black)",
            description: "",
            price: 1,
          },
          {
            name: "Chocolate Flakes",
            description: "",
            price: 0.3,
          },
          {
            name: "White chocolate Flakes",
            description: "",
            price: 0.3,
          },
          {
            name: "Milk Chocolate chip",
            description: "",
            price: 0.3,
          },
          {
            name: "Dark Chocolate chip",
            description: "",
            price: 0.3,
          },
          {
            name: "Smarties",
            description: "",
            price: 0.5,
          },
          {
            name: "Vermicelli chocolate",
            description: "",
            price: 0.2,
          },
          {
            name: "Vermicelli colored",
            description: "",
            price: 0.2,
          },
          {
            name: "Marshmallow",
            description: "",
            price: 0.5,
          },
          {
            name: "CornFlakes",
            description: "",
            price: 0.3,
          },
          {
            name: "Ice cream",
            description: "",
            price: 1,
          },
          {
            name: "Fruits (ask for your favorite - 1 Piece)",
            description: "",
            price: 1,
          },
          {
            name: "Caramel Syrup",
            description: "",
            price: 0.3,
          },
          {
            name: "Strawberry Syrup",
            description: "",
            price: 0.5,
          },
          {
            name: "Chocolate Hazelnut Syrup",
            description: "",
            price: 0.5,
          },
          {
            name: "Chocolate Syrup",
            description: "",
            price: 0.2,
          },
          {
            name: "Whipping Cream",
            description: "",
            price: 0.5,
          },
          {
            name: "Honey",
            description: "",
            price: 1,
          },
          {
            name: "Maple Syrup",
            description: "",
            price: 1,
          },
          {
            name: "Strawberry",
            description: "",
            price: 0.75,
          },
          {
            name: "Banana",
            description: "",
            price: 0.5,
          },
          {
            name: "Nuts",
            description: "",
            price: 0.5,
          },
        ],
      },
      {
        title: "Sides",
        image: require("./images/sauce.png"),
        quote: "",
        items: [
          {
            name: "Chocolate sauce (dark, white, milk)",
            description: "",
            price: 0.5,
          },
          {
            name: "Ice cream (Vanilla, Chocolate, strawberry)",
            description: "",
            price: 1,
          },
          {
            name: "Fruits (ask for your favorite - 1 Piece)",
            description: "",
            price: 1,
          },
        ],
      },
      {
        title: "Beverages",
        image: require("./images/beverage.png"),
        quote: "",
        items: [
          {
            name: "Water",
            description: "",
            price: 0.3,
          },
        ],
      },
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
          Sentence to be written
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
