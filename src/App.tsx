import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Label,
  Radio,
  Select,
  Textarea,
  ThemeProvider
} from 'theme-ui';
import { Text } from 'theme-ui';
import { Slider } from 'theme-ui';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header className="App-header">
        <Text
          sx={{
            fontSize: 4,
            fontWeight: 'bold'
          }}
        >
          Hello
        </Text>
        <Text variant="caps">This is a brand new snowpack react app</Text>
        <Box as="form" onSubmit={(e) => e.preventDefault()}>
          <Label htmlFor="username">Username</Label>
          <Input name="username" id="username" mb={3} />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            mb={3}
          />
          <Box>
            <Label mb={3}>
              <Checkbox />
              Remember me
            </Label>
          </Box>
          <Label htmlFor="sound">Sound</Label>
          <Select name="sound" id="sound" mb={3}>
            <option>Beep</option>
            <option>Boop</option>
            <option>Blip</option>
          </Select>
          <Label htmlFor="comment">Comment</Label>
          <Textarea name="comment" id="comment" rows={6} mb={3} />
          <Flex mb={3}>
            <Label>
              <Radio name="letter" /> Alpha
            </Label>
            <Label>
              <Radio name="letter" /> Bravo
            </Label>
            <Label>
              <Radio name="letter" /> Charlie
            </Label>
          </Flex>
          <Label>Slider</Label>
          <Slider mb={3} />
          <Button>Submit</Button>
        </Box>
      </header>
    </ThemeProvider>
  );
}

export default App;
