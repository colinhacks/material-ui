import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

export default function FlexRowRatio() {
  const [flexBasis, setFlexBasis] = React.useState(200);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Card variant="outlined" orientation="horizontal" sx={{ minWidth: 300 }}>
        <AspectRatio
          sx={{
            flexBasis: flexBasis ? `${flexBasis}px` : undefined,
            overflow: 'auto',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            alt=""
          />
        </AspectRatio>
        <div>
          <Typography level="title-sm">Yosemite National Park</Typography>
          <Typography level="body-sm">California, USA</Typography>
        </div>
      </Card>
      <br />
      <FormControl sx={{ mx: 'auto', width: '100%' }}>
        <FormLabel>flexBasis</FormLabel>
        <Input
          variant="outlined"
          type="number"
          placeholder="number"
          value={flexBasis}
          endDecorator="px"
          onChange={(event) => setFlexBasis(event.target.valueAsNumber)}
        />
      </FormControl>
    </Box>
  );
}
