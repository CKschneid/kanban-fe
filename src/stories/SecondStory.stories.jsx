const SecondStory = ({ text }) => <div>{text}</div>;

export default {
  title: "SecondStory",
  component: SecondStory,
};

// export const Default = () => <Example text="some sample text" />;
const Template = (args) => <SecondStory {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "some sample text in args object",
};
