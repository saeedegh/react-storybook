import Button from "../components/Button";

export default {
  title: "buttonnnnnnnnnn",
  component: Button,
};

const Template = (args) => <Button {...args}>hi</Button>;
export const Red = Template.bind({});

Red.args = {
  backgroundColor: "red",
};

export const blue = Template.bind({});
blue.args = {
  backgroundColor: "blue",
};
