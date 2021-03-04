export default function SettingsHome() {
  return {
    render() {
      return (
        <div>
          <div className="pt-3 pr-2 pb-3 pl-2 mb-8 rounded-md border border-gray-400 max-w-3xl flex">
            <input
              type="text"
              className="focus:outline-none ml-4 resize-none"
              key="note_contents_placeholder"
              placeholder="Add a bookmark..."
            />
          </div>
        </div>
      );
    },
  };
}
