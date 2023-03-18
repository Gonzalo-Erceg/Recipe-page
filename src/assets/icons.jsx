export const Restaurant = ({width})=>{
    return(<svg width={width} height={width} fill="#F2994A"focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RestaurantMenuIcon"><path d="m8.1 13.34 2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"></path></svg>)
}


export const Clock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width={28}
    height={26}
    fill="#4F4F4F"
    {...props}
  >
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12Zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm2.5 14.33a.999.999 0 0 0 .366-1.366L13 11.732V6a1 1 0 1 0-2 0v6c0 .176.046.348.134.5l2 3.464a1 1 0 0 0 1.366.366Z" />
  </svg>
)



export const Point =  (props) => (
  <svg
    width={13}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={1.5} cy={1.5} r={1.5} fill="#C4C4C4" />
    <circle cx={1.5} cy={6.5} r={1.5} fill="#C4C4C4" />
    <circle cx={6.5} cy={1.5} r={1.5} fill="#C4C4C4" />
    <circle cx={6.5} cy={6.5} r={1.5} fill="#C4C4C4" />
    <circle cx={11.5} cy={1.5} r={1.5} fill="#C4C4C4" />
    <circle cx={11.5} cy={6.5} r={1.5} fill="#C4C4C4" />
  </svg>
)
