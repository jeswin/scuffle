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
        fill="currentColor"
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
        fill="currentColor"
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
        fill="currentColor"
      >
        <rect fill="none" height="24" width="24" />
        <path d="M21.29,5.89l-10,10c-0.39,0.39-1.02,0.39-1.41,0l-2.83-2.83c-0.39-0.39-0.39-1.02,0-1.41l0,0c0.39-0.39,1.02-0.39,1.41,0 l2.12,2.12l9.29-9.29c0.39-0.39,1.02-0.39,1.41,0v0C21.68,4.87,21.68,5.5,21.29,5.89z M12,20c-4.71,0-8.48-4.09-7.95-8.9 c0.39-3.52,3.12-6.41,6.61-6.99c1.81-0.3,3.53,0.02,4.99,0.78c0.39,0.2,0.86,0.13,1.17-0.18l0,0c0.48-0.48,0.36-1.29-0.24-1.6 C15.11,2.36,13.45,1.95,11.68,2c-5.14,0.16-9.41,4.34-9.67,9.47C1.72,17.24,6.3,22,12,22c1.2,0,2.34-0.21,3.41-0.6 c0.68-0.25,0.87-1.13,0.35-1.65l0,0c-0.27-0.27-0.68-0.37-1.04-0.23C13.87,19.83,12.95,20,12,20z M19,15h-2c-0.55,0-1,0.45-1,1v0 c0,0.55,0.45,1,1,1h2v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2v-2c0-0.55-0.45-1-1-1 h0c-0.55,0-1,0.45-1,1V15z" />
      </svg>
    ),
    bookmarks: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        viewBox={viewBox}
        width={width}
        fill="currentColor"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15 7v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10m4-6H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z" />
      </svg>
    ),
    stars: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height={height}
        viewBox={viewBox}
        width={width}
        fill="currentColor"
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
        fill="currentColor"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
        <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
    more_vert: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height={height}
        viewBox={viewBox}
        width={width}
        fill="currentColor"
      >
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
        </g>
        <g>
          <g>
            <g>
              <path d="M12,8c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,8,12,8z M12,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,10,12,10z M12,16c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,16,12,16z" />
            </g>
          </g>
        </g>
      </svg>
    ),
    photo_library: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        viewBox={viewBox}
        width={width}
        fill="currentColor"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
      </svg>
    ),
    ondemand_video: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        viewBox={viewBox}
        width={width}
        fill="currentColor"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z" />
      </svg>
    ),
    settings: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height={height}
        viewBox={viewBox}
        width={width}
        fill="currentColor"
      >
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
        </g>
      </svg>
    ),
  };
}

export const iconsDefault = icons({
  height: "16",
  width: "16",
  viewBox: "0 0 24 24",
});
