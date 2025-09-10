"use client";
import { Typography, Box, Card, CardContent } from "@mui/material";
import { GiCarrot, GiChickenOven, GiPig, GiCow } from "react-icons/gi";
import { PiLeafFill } from "react-icons/pi";

const MenuProduct = ({ product }) => {
  return <ItemsView subSection={product} onBack={() => {}} />;
};

// Hilfsfunktion für Label-Styling
const getLabelStyle = (label) => {
  const labelLower = label.toLowerCase();

  if (labelLower.includes("vegetarisch")) {
    return {
      backgroundColor: "#e8f5e8",
      color: "#2e7d32",
      borderColor: "#4caf50",
      icon: <GiCarrot style={{ fontSize: "0.9rem", marginRight: "4px" }} />,
    };
  }

  if (labelLower.includes("vegan")) {
    return {
      backgroundColor: "#e8f5e8",
      color: "#1b5e20",
      borderColor: "#388e3c",
      icon: <PiLeafFill style={{ fontSize: "0.9rem", marginRight: "4px" }} />,
    };
  }

  if (
    labelLower.includes("hühnchen") ||
    labelLower.includes("hähnchen") ||
    labelLower.includes("chicken")
  ) {
    return {
      backgroundColor: "#ffebee",
      color: "#c62828",
      borderColor: "#f44336",
      icon: (
        <GiChickenOven style={{ fontSize: "0.9rem", marginRight: "4px" }} />
      ),
    };
  }

  if (labelLower.includes("schwein") || labelLower.includes("pork")) {
    return {
      backgroundColor: "#ffebee",
      color: "#d32f2f",
      borderColor: "#f44336",
      icon: <GiPig style={{ fontSize: "0.9rem", marginRight: "4px" }} />,
    };
  }

  if (labelLower.includes("rind") || labelLower.includes("beef")) {
    return {
      backgroundColor: "#ffebee",
      color: "#b71c1c",
      borderColor: "#f44336",
      icon: <GiCow style={{ fontSize: "0.9rem", marginRight: "4px" }} />,
    };
  }

  // Standard-Styling für andere Labels
  return {
    backgroundColor: "#f5f5f5",
    color: "#666",
    borderColor: "#ddd",
    icon: null,
  };
};

const ItemsView = ({ subSection, onBack }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #ffffffff 0%rgba(255, 255, 255, 1)2d 100%)",
        padding: { xs: "80px 16px", md: "100px 24px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Banner anzeigen, falls vorhanden */}
        {subSection.banner && (
          <Card
            sx={{
              background: "linear-gradient(135deg, #b7002e 0%, #8b0023 100%)",
              borderRadius: "12px",
              mb: 4,
              boxShadow: "0 4px 20px rgba(183, 0, 46, 0.3)",
            }}
          >
            <CardContent sx={{ padding: "24px", textAlign: "center" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#ffffff",
                  fontWeight: 700,
                  mb: subSection.banner.subtext ? 1 : 0,
                }}
              >
                {subSection.banner.title}
              </Typography>
              {subSection.banner.subtext && (
                <Typography
                  variant="body1"
                  sx={{
                    color: "#ffcccc",
                    fontWeight: 500,
                  }}
                >
                  {subSection.banner.subtext}
                </Typography>
              )}
            </CardContent>
          </Card>
        )}

        {subSection.items.map((item, index) => (
          <Box key={index} sx={{ mb: 6 }}>
            <ItemDisplay item={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const ItemDisplay = ({ item }) => {
  return (
    <Card
      sx={{
        background: "#ffffffff",
        borderRadius: "8px",
        boxShadow: "0 0px 0px rgba(0, 0, 0, 0.3)",
        border: "1px solid #ffffffff",
        mb: 3,
      }}
    >
      <CardContent sx={{ padding: "24px" }}>
        {/* Header */}
        <Box sx={{ mb: 3 }}>
          <h2
            style={{
              color: "#b7002e",
              marginBottom: 10,
            }}
          >
            {item.name.toUpperCase()}
          </h2>

          {item.description && (
            <Typography
              variant="body1"
              sx={{
                color: "#aaaaaaff",
                lineHeight: 1.5,
              }}
            >
              {item.description}
            </Typography>
          )}
        </Box>

        {/* Preis */}
        {item.price && (
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#007d3d",
                fontWeight: 700,
              }}
            >
              {item.price}
            </Typography>
          </Box>
        )}

        {/* Labels */}
        {item.labels && item.labels.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {item.labels.map((label, labelIndex) => {
                const labelStyle = getLabelStyle(label);
                return (
                  <Box
                    key={labelIndex}
                    component="span"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      px: 1.5,
                      py: 0.5,
                      backgroundColor: labelStyle.backgroundColor,
                      color: labelStyle.color,
                      borderRadius: "4px",
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                  >
                    {labelStyle.icon}
                    {label}
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}

        {/* Varianten */}
        {item.children && item.children.length > 0 && (
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                color: "#ffffff",
                fontWeight: 600,
              }}
            >
              Varianten
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {item.children.map((child, childIndex) => (
                <Box
                  key={childIndex}
                  sx={{
                    background: "#1e1e1e",
                    border: "1px solid #505050",
                    borderRadius: "6px",
                    padding: "16px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        color: "#ffffff",
                      }}
                    >
                      {child.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#4caf50",
                        fontWeight: 600,
                      }}
                    >
                      {child.price}
                    </Typography>
                  </Box>
                  {child.description && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#aaaaaa",
                        fontSize: "0.9rem",
                      }}
                    >
                      {child.description}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default MenuProduct;
