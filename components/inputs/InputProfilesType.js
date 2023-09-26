import useMainStore from "@/stores/useMainStore";

const colorMapping = {
  silver: "strieborna",
  black: "čierna",
  white: "biela",
  champagne: "šampaň",
};

const InputProfilesType = () => {
  const { doors, setSelectedProfile } = useMainStore((state) => ({
    doors: state.doors,
    setSelectedProfile: state.setSelectedProfile,
  }));

  const handleSelectChange = (e) => {
    const value = JSON.parse(e.target.value);
    const handle = value.handle.replace(/ü/g, "u").toLowerCase();
    const color = value.color;

    if (value.title === "London") {
      setSelectedProfile({
        handle,
        color,
        wheels: "asymmetric",
      });
    } else {
      setSelectedProfile({
        handle,
        color,
        wheels: "symmetric",
      });
    }
  };

  const createOptions = () => {
    return doors.availableProfiles.flatMap((profile) => {
      return profile.colors.map((color) => {
        const type = profile.name + " - " + colorMapping[color];
        return (
          <option
            key={type}
            value={JSON.stringify({
              handle: profile.name,
              color: color,
            })}
          >
            {type}
          </option>
        );
      });
    });
  };

  return (
    <div>
      <label>
        Vyberte si typ profilu
        <select onChange={handleSelectChange}>
          <option value="0">--Prosím, vyberte si možnosť--</option>
          {createOptions()}
        </select>
      </label>
    </div>
  );
};

export default InputProfilesType;
