function icons(options: { height?: string; width?: string; viewBox?: string }) {
  const height = options.height ?? "24";
  const width = options.width ?? "24";
  const viewBox = options.viewBox ?? "0 0 24 24";

  return {
    home: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height={height}
        viewBox={viewBox}
        width={width}
      >
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
        </g>
        <g>
          <path d="M10.8,3.9l-6,4.5C4.3,8.78,4,9.37,4,10v9c0,1.1,0.9,2,2,2h4v-7h4v7h4c1.1,0,2-0.9,2-2v-9c0-0.63-0.3-1.22-0.8-1.6l-6-4.5 C12.49,3.37,11.51,3.37,10.8,3.9z" />
        </g>
      </svg>
    ),
    notes: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height={height}
        viewBox={viewBox}
        width={width}
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <g>
              <g>
                <path d="M20,11H4c-0.55,0-1,0.45-1,1l0,0c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1l0,0C21,11.45,20.55,11,20,11z" />
                <path d="M4,18h10c0.55,0,1-0.45,1-1l0,0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1l0,0C3,17.55,3.45,18,4,18z" />
                <path d="M20,6H4C3.45,6,3,6.45,3,7v0.01c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1V7C21,6.45,20.55,6,20,6z" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
    add_task: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height={height}
        viewBox={viewBox}
        width={width}
      >
        <rect fill="none" height="24" width="24" />
        <path d="M21.29,5.89l-10,10c-0.39,0.39-1.02,0.39-1.41,0l-2.83-2.83c-0.39-0.39-0.39-1.02,0-1.41l0,0c0.39-0.39,1.02-0.39,1.41,0 l2.12,2.12l9.29-9.29c0.39-0.39,1.02-0.39,1.41,0v0C21.68,4.87,21.68,5.5,21.29,5.89z M12,20c-4.71,0-8.48-4.09-7.95-8.9 c0.39-3.52,3.12-6.41,6.61-6.99c1.81-0.3,3.53,0.02,4.99,0.78c0.39,0.2,0.86,0.13,1.17-0.18l0,0c0.48-0.48,0.36-1.29-0.24-1.6 C15.11,2.36,13.45,1.95,11.68,2c-5.14,0.16-9.41,4.34-9.67,9.47C1.72,17.24,6.3,22,12,22c1.2,0,2.34-0.21,3.41-0.6 c0.68-0.25,0.87-1.13,0.35-1.65l0,0c-0.27-0.27-0.68-0.37-1.04-0.23C13.87,19.83,12.95,20,12,20z M19,15h-2c-0.55,0-1,0.45-1,1v0 c0,0.55,0.45,1,1,1h2v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2v-2c0-0.55-0.45-1-1-1 h0c-0.55,0-1,0.45-1,1V15z" />
      </svg>
    ),
    bookmarks: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height={height}
        viewBox={viewBox}
        width={width}
      >
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
        </g>
        <g>
          <path d="M15,5H5C3.9,5,3,5.9,3,7v14.48c0,0.72,0.73,1.2,1.39,0.92L10,20l5.61,2.4c0.66,0.28,1.39-0.2,1.39-0.92V7 C17,5.9,16.1,5,15,5z M20,20L20,20c0.55,0,1-0.45,1-1V3c0-1.1-0.9-2-2-2H7C6.45,1,6,1.45,6,2v0c0,0.55,0.45,1,1,1h12v16 C19,19.55,19.45,20,20,20z" />
        </g>
      </svg>
    ),
    stars: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height={height}
        viewBox={viewBox}
        width={width}
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <path d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M14.77,17.06L12,14.95l-2.77,2.11 c-0.39,0.29-0.92-0.08-0.78-0.55l1.07-3.44l-2.74-1.96c-0.4-0.28-0.2-0.91,0.29-0.91h3.36l1.1-3.62c0.14-0.47,0.81-0.47,0.96,0 l1.1,3.62h3.36c0.49,0,0.69,0.62,0.29,0.91l-2.74,1.96l1.07,3.44C15.7,16.97,15.16,17.35,14.77,17.06z" />
        </g>
      </svg>
    ),
    access_time: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        viewBox={viewBox}
        width={width}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
        <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
  };
}

export const iconsDefault = icons({
  height: "16",
  width: "16",
  viewBox: "0 0 24 24",
});
