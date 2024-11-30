import React, { useState } from "react";
import DateField from "./Components/DateField";
import FabricSection from "./Components/FabricSection";
import TrimsSection from "./Components/TrimsSection";
import AccessoriesSection from "./Components/AccessoriesSection";
import ChinaFabricSection from "./Components/ChinaFabricSection";
import NumberField from "./Components/NumberFields";
import MajorFabricSection from "./Components/MajorFebricSection";

const App = () => {
  const [fabrics, setFabrics] = useState([
    {
      fabricName: "",
      perPieceRequirement: "",
      unit: "M",
      processes: [],
      colorAndQuantity: [{ color: "", quantity: "" }],
      stagesToSkip: [],
    },
  ]);
  const [majorFabric, setMajorFabric] = useState("None"); // State for major fabric
  const [chinaFabricPresent, setChinaFabricPresent] = useState(null);
  const [chinaFabrics, setChinaFabrics] = useState([]);
  const [trims, setTrims] = useState([{ trim: "" }]);
  
  const [productionPerDay, setProductionPerDay] = useState(5);
  const [totalOrderQuantity, setTotalOrderQuantity] = useState(12000);
  const [accessories, setAccessories] = useState([]);

  const addFabric = () =>
    setFabrics([
      ...fabrics,
      {
        fabricName: "",
        perPieceRequirement: 0.5,
        unit: "M",
        processes: [], // Initialize as an empty array
        colorAndQuantity: [{ color: "", quantity: "" }],
        stagesToSkip: [], // Initialize as an empty array
      },
    ]);
  

  const updateFabric = (index, field, value) => {
    const updatedFabrics = [...fabrics];
    updatedFabrics[index][field] = value;
    setFabrics(updatedFabrics);
  };

  const addColorAndQuantity = (index) => {
    const updatedFabrics = [...fabrics];
    updatedFabrics[index].colorAndQuantity.push({ color: "", quantity: "" });
    setFabrics(updatedFabrics);
  };

  const addTrim = () => {
    setTrims([...trims, { trim: "" }]);
  };

  const updateTrim = (index, value) => {
    const updatedTrims = [...trims];
    updatedTrims[index].trim = value;
    setTrims(updatedTrims);
  };

  const removeTrim = (indexToRemove) => {
    const updatedTrims = trims.filter((_, index) => index !== indexToRemove);
    setTrims(updatedTrims);
  };
  

  const handleAddAccessory = (newAccessory) => {
    setAccessories([...accessories, newAccessory]);
  };

  const handleRemoveAccessory = (accessoryToRemove) => {
    setAccessories(accessories.filter((item) => item !== accessoryToRemove));
  };
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     productionPerDay,
  //     totalOrderQuantity,
  //     fabrics,
  //     majorFabric, // Include majorFabric in the final submission
  //     chinaFabricPresent,
  //     chinaFabrics,
  //     trims,
  //     accessories,
  //   };
  //   console.log("Form Data:", formData);
  //   alert(JSON.stringify(formData, null, 2));
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      productionPerDay,
      totalOrderQuantity,
      fabrics,
      majorFabric,
      chinaFabricPresent,
      chinaFabrics,
      trims,
      accessories,
    };
  
    try {
      // Replace with your API endpoint
      const response = await fetch("http://localhost:5000/formData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Data saved successfully:", formData);
        alert("Form submitted successfully!");
  
        // Reset form fields
        setProductionPerDay("");
        setTotalOrderQuantity("");
        setFabrics([]);
        setMajorFabric("");
        setChinaFabricPresent(false);
        setChinaFabrics([]);
        setTrims([]);
        setAccessories([]);
      } else {
        console.error("Failed to save data");
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  return (
    <>
      <h1>T&A DATA SUBMISSION FORM</h1>

      <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
        {/* Date Fields */}
        <DateField
          label="Start Date"
          name="startDate"
          defaultValue={new Date().toISOString().split("T")[0]}
        />
        <DateField
          label="End Date"
          name="endDate"
          defaultValue={new Date().toISOString().split("T")[0]}
        />

        {/* Number Fields */}
        <NumberField
          label="Production Per Day Per Machine"
          name="productionPerDay"
          value={productionPerDay}
          onChange={(value) => setProductionPerDay(value)}
        />
        <NumberField
          label="Total Order Quantity"
          name="totalOrderQuantity"
          value={totalOrderQuantity}
          onChange={(value) => setTotalOrderQuantity(value)}
        />

        {/* Fabric Section */}
        <FabricSection
          fabrics={fabrics}
          onAddFabric={addFabric}
          onUpdateFabric={updateFabric}
          onAddColor={addColorAndQuantity}
        />

        {/* China Fabric Section */}
        <ChinaFabricSection
          fabrics={fabrics}
          chinaFabricPresent={chinaFabricPresent}
          setChinaFabricPresent={setChinaFabricPresent}
          chinaFabrics={chinaFabrics}
          setChinaFabrics={setChinaFabrics}
        />

        {/* Major Fabric Section */}
        <MajorFabricSection
          majorFabric={majorFabric}
          setMajorFabric={setMajorFabric}
        />

        {/* Trims Section */}
        <TrimsSection
  trims={trims}
  onAddTrim={(value) => setTrims([...trims, value])}
  onUpdateTrim={(index, value) => {
    const updatedTrims = [...trims];
    updatedTrims[index] = value;
    setTrims(updatedTrims);
  }}
  onRemoveTrim={removeTrim} // Pass remove function
/>

        {/* Accessories Section */}
        <AccessoriesSection
        accessories={accessories}
        onAddAccessory={handleAddAccessory}
        onRemoveAccessory={handleRemoveAccessory}
      />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
