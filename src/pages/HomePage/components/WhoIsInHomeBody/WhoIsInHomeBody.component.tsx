import CircularProgress from "@mui/material/CircularProgress";
import PersonIcon from "@mui/icons-material/Person";

import { useStyles } from "./WhoIsInHomeBody.styles";
import { IWhoIsInHomeBodyProps } from "./WhoIsInHomeBody.types";

const WhoIsInHomeBody = ({ getWhoIsInHome }: IWhoIsInHomeBodyProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {getWhoIsInHome.status === 200 ? (
        <div className={classes.grid}>
          {getWhoIsInHome.data?.map((value, index) => (
            <span key={index} className={classes.span}>
              <PersonIcon
                color={"success"}
                sx={{ marginRight: 1, fontSize: "25px" }}
              />{" "}
              {value}
            </span>
          ))}
        </div>
      ) : getWhoIsInHome.status === 100 ? (
        <CircularProgress />
      ) : (
        <p>Błąd</p>
      )}
    </div>
  );
};

export default WhoIsInHomeBody;
