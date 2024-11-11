import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useState, useEffect } from "react";
import { Button } from "antd";
import logoNo2 from "../../assets/logoNo2.svg";
import closeMenu from "../../assets/closeMenu.svg";
import "./main-layout.css";
import Filter from "../../components/filter/Filter";
import LoginHeader from "../../components/loginheader/LoginHeader";

const MainLayout: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      document.body.style.backgroundColor = "#FCA311";
    } else {
      document.body.style.backgroundColor = "#F2F2F2";
    }

    return () => {
      document.body.style.backgroundColor = "#F2F2F2";
    };
  }, [location.pathname]);

  return (
    <div>
      {
        location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/post" && (
          <div
            style={{
              backgroundColor: "white",
              position: "fixed",
              top: "0",
              left: "0",
              width: open ? "300px" : "80px",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              transition: "width 0.3s ease",
              zIndex: 1000,
            }}
            className="Menu"
          >
            {open ? (
              <Filter onClose={onClose} />
            ) : (
              <div>
                <Button
                  className="open-drawer"
                  type="primary"
                  onClick={showDrawer}
                  style={{
                    backgroundColor: "inherit",
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    width: "30px",
                  }}
                >
                  <img src={closeMenu} alt="open menu" />
                </Button>
                <img style={{ position: "absolute", top: "100px", left: "16px" }} src={logoNo2} alt="" />
              </div>
            )}
          </div>
        )
      }
      <div
        className="main-layout"
        style={{
          width: open ? "calc(100% - 340px)" : "calc(100% - 120px)",
          transform: open ? "translateX(300px)" : "translateX(80px)",
          transition: "width 0.3s ease, transform 0.3s ease",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          paddingRight: "30px"
        }}
      >
        {
          location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/post" ? (
            <Header open={open} />
          ) : (<LoginHeader open={open} />)}
        <div
          style={{
            paddingRight: "50px",
            paddingLeft: open ? "0" : "50px",
            flex: 1,
          }}
        >
          <Outlet />
        </div>
        {
          location.pathname !== "/login" && location.pathname !== "/register" &&  (
            <Footer />
          )
        }
      </div>
    </div>
  );
};

export default MainLayout;
