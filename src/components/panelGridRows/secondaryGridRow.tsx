import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import styled from "styled-components";

interface Props {
  itemData: any;
  indexKey: number;
}

const Hexagon = styled(Box)`
  width: 0.3rem;
  height: 0.3rem;
  background-color: #c47c5a;
  transform: rotate(45deg);
  margin-bottom: 5px;
`;
const ItemNameGrid = styled(Grid)`
  flex: 0 -1 2rem;
`;
const STypography = styled(Typography)`
  font-style: italic;
  margin-bottom: 2px;
`;

const SecondaryGridRow: React.FC<Props> = ({ itemData = {}, indexKey = 0 }) => {
  return (
    <Grid container key={indexKey}>
      <ItemNameGrid container item xs={9} alignContent="center">
        <Typography variant="h4">{itemData.name.toUpperCase()}</Typography>
      </ItemNameGrid>

      <Grid container item xs direction="row" justifyContent="flex-end">
        <Grid
          item
          container
          xs={2}
          direction="row"
          alignContent="center"
          justifyContent="flex-start"
        >
          <Hexagon />
        </Grid>
        {itemData.lot_price && (
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignContent="flex-end"
            item
            xs={4}
          >
            <STypography variant="h6">50ML</STypography>
          </Grid>
        )}
        <Grid container item xs={6} justifyContent="flex-end">
          <Typography variant="h5">{itemData.unit_price}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default SecondaryGridRow;
