const Example = ({ text }) => <div>{text}</div>;

export default {
  title: "Example",
  component: Example,
};

// export const Default = () => <Example text="some sample text" />;
const Template = (args) => <Example {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "some sample text in args object",
};
