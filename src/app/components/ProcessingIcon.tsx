import * as forgo from "forgo";

export default function ProcessingIcon() {
  return {
    render() {
      return (
        <svg
          version="1.1"
          id="L4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 40 100 100"
          enable-background="new 0 0 0 0"
        >
          <circle fill="gray" stroke="none" cx="6" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.1"
            />
          </circle>
          <circle fill="gray" stroke="none" cx="26" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.2"
            />
          </circle>
          <circle fill="gray" stroke="none" cx="46" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.3"
            />
          </circle>
        </svg>
      );
    },
  };
}
