import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Fade,
  Typography,
} from "@mui/material";
import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordian({ management, idx }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const { title, desc } = management;

  return (
    <>
      <Accordion
        className={`accordian-wrapper ${idx === 0 ? "first-item" : ""}`}
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
          "& .MuiAccordionDetails-root": {
            display: expanded ? "block" : "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-dark-blue" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{ fontWeight: "600" }}
            className="text-medium-blue text-15"
          >
            <span className="text-dark-blue font-bold">{idx + 1}.</span> {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-whispering-sky-blue text-slate-blue-gray">
          <Typography>{desc}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
