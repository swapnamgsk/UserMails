import React, { useState } from "react";

function Listfile() {
  const initialList = [
    { id: 1, profile: "https://lh5.googleusercontent.com/-IPreTeIht_I/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclAf5TfaRPgR7dcmJjtLupIhfa8Aw/photo.jpg", name: "swapnamg1911@gmail.com" },
    { id: 2, profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVD87JJPIGz5ThxB6orDdw3d1B9eeRO4UM9DBcJlY68F3wFLZFsWRKBK-R_dkE7L7zpM&usqp=CAU", name: "radhakrishna123@gmail.com" },
    { id: 3, profile: "https://media.licdn.com/dms/image/C4D03AQE-5XFZlhyZtA/profile-displayphoto-shrink_400_400/0/1534472778701?e=2147483647&v=beta&t=THr_PgrcWWznDl9BDPo9Lp_PWdtaUgIS10PflqwNL0s", name: "kishori123@gmail.com" },
    { id: 4, profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7RoNk_acGsHlWYLRCF1LPTkIDgxfH3i6O37AhdXfV6vic9PZT81nmw1rjkAHFOUgcqE&usqp=CAU", name: "sita143rama@gmail.com" },
    { id: 5, profile: "https://media.licdn.com/dms/image/C5103AQGeoFCS7Wsqlg/profile-displayphoto-shrink_400_400/0/1578628771923?e=2147483647&v=beta&t=4fwQy7_Ejj7IK3CU51yJZmnGHqGZOk8MYz1vOEZ_p3g", name: "rama1933@gmail.com" },
    { id: 6, profile: "https://media.licdn.com/dms/image/C5103AQF3-HB8qbn-8g/profile-displayphoto-shrink_400_400/0/1526975692157?e=2147483647&v=beta&t=02jzxnsclLr4-hyVkbu-m6SLC3WTb5CTNzhEae4F34Q", name: "ranjitha@gmail.com" },
  ];

  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [availableItems, setAvailableItems] = useState(initialList);
  const [showList, setShowList] = useState(false);

  const handleInputChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setInputValue(e.target.value);
    setAvailableItems(
      initialList.filter(
        (item) =>
          item.name.toLowerCase().includes(searchText) &&
          !selectedItems.some((selectedItem) => selectedItem.id === item.id)
      )
    );
  };

  const handleInputClick = () => {
    setShowList(true);
  };

  const handleItemClick = (selectedItem) => {
    setSelectedItems([...selectedItems, selectedItem]);
    setAvailableItems(availableItems.filter((item) => item.id !== selectedItem.id));
    setInputValue(""); 
    setShowList(false); 
  };

  const handleRemoveItem = (removedItem) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== removedItem.id));
    setAvailableItems([...availableItems, removedItem]);
  };

  return (
    <div>
      <h1>Pick Users</h1>
      <div className="tags-input-container">
        <div className="tag-item">
          {selectedItems.map((item) => (
            <span key={item.id} className="text">
              <img src={item.profile} alt={item.name} className="image" />
              <p className="inputname">{item.name}</p>
              <span className="close" onClick={() => handleRemoveItem(item)}>&times;</span>
            </span>
          ))}
        </div>
        <input
          className="tags-input"
          placeholder="Enter"
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleInputClick}
        />
      </div>
      {showList && (
        <div className="details">
          {availableItems.map((item) => (
            <p key={item.id} onClick={() => handleItemClick(item)} className="item">
              <div className="profile">
                {item.profile && <img src={item.profile} alt={item.name} className="image" />}
              </div>
              <p className="name">{item.name}</p>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Listfile;
