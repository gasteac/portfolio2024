import React from 'react'
import { Fade } from "react-awesome-reveal";
export const Tools = () => {
  return (
    <div className='flex flex-wrap  flex-col gap-6 m-12 justify-center items-center overflow-hidden'>
      {/* TARJETA FRONTEND */}
      <Fade triggerOnce={true} delay={100} duration={1500}>
      <div className="bg-emerald-900 bg-opacity-30 group hover:bg-emerald-900 hover:bg-opacity-70 transition-all px-2 pb-4 min-w-52 h-full rounded-2xl flex flex-col">
        <h1 className='text-xl tablet:text-2xl p-3 group-hover:tracking-widest tracking-wide transition-all'>Frontend</h1>
        <div  className='flex items-center align-center justify-evenly flex-wrap gap-2 '>
          {/* React */}
          <a className='tooltip' href="https://es.react.dev/" target='_blank' data-tip='React'>
            <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
              <svg  viewBox="0 0 256 228" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF" /></svg>
          </div>
          </a>
          {/* Typescript */}
          <a className='tooltip' href="https://www.typescriptlang.org/" target='_blank' data-tip='Typescript'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
          <svg   viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6" /><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF" /></svg>
          </div>
            </a>
          <a className='tooltip' href="https://developer.mozilla.org/en/docs/Web/JavaScript" target='_blank' data-tip='Javascript'>
            <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z" /><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330" /></svg>
            </div>
          </a>
          <a className='tooltip' href="https://tailwindcss.com/" target='_blank' data-tip='TailwindCSS'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
            <svg  
              viewBox="0 0 256 154"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <defs
              ><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient">
                  <stop stopColor="#2298BD" offset="0%"></stop>
                  <stop stopColor="#0ED7B5" offset="100%"></stop>
                </linearGradient></defs>
              <path
                d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
                fill="url(#gradient)"></path></svg>
          
          </div>
          </a>
          <a className='tooltip' href="https://developer.mozilla.org/en/docs/Web/HTML" target='_blank' data-tip='HTML'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
            <svg   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
              <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
              <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
              <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z" />
              <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z" />
            </svg>          
            </div>
            </a>
          <a className='tooltip' href="https://developer.mozilla.org/en/docs/Web/CSS" target='_blank' data-tip='CSS'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
            <svg   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
              <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
              <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
              <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z" />
              <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z" />
            </svg>
          </div>
          </a>
         
        </div>
      </div>
      </Fade>
      {/* TARJETA BACKEND */}
      <Fade triggerOnce={true} delay={100} duration={1500}>
      <div className="bg-emerald-900 bg-opacity-30 group hover:bg-emerald-900 hover:bg-opacity-70 transition-all px-2 pb-4 min-w-52 h-full rounded-2xl flex flex-col">
        <h1 className='text-xl tablet:text-2xl p-3 group-hover:tracking-widest tracking-wide transition-all'>Backend</h1>
        <div className='flex items-center align-center justify-evenly flex-wrap gap-2 '>
          <a data-tip='Node.js' className='tooltip' href="https://nodejs.org/en" target='_blank'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[66px] w-[66px] p-2 flex items-center justify-center'>
              <svg   viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stopColor="#41873F" /><stop offset="32.88%" stopColor="#418B3D" /><stop offset="63.52%" stopColor="#419637" /><stop offset="93.19%" stopColor="#3FA92D" /><stop offset="100%" stopColor="#3FAE2A" /></linearGradient><linearGradient id="c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stopColor="#41873F" /><stop offset="40.32%" stopColor="#54A044" /><stop offset="71.36%" stopColor="#66B848" /><stop offset="90.81%" stopColor="#6CC04A" /></linearGradient><linearGradient id="f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stopColor="#6CC04A" /><stop offset="28.64%" stopColor="#66B848" /><stop offset="59.68%" stopColor="#54A044" /><stop offset="86.24%" stopColor="#41873F" /></linearGradient><path id="b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" /><path id="e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" /></defs><path fill="url(#a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" /><mask id="d" fill="#fff"><use xlinkHref="#b" /></mask><path fill="url(#c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#d)" /><mask id="g" fill="#fff"><use xlinkHref="#e" /></mask><path fill="url(#f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#g)" /></svg>
          </div>
          </a>
          <a data-tip='ExpressJS' className='tooltip' href="https://expressjs.com/" target='_blank'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
            <svg   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fff" d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" /></svg>          </div>
          </a>
          <a data-tip='NestJS' className='tooltip' href="https://nestjs.com/" target='_blank'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
              <svg   viewBox="0 0 264.6 255.6" xmlns="http://www.w3.org/2000/svg"><path d="M153.3 4.2c-1.8 0-3.5.4-5 1 3.3 2.1 5.1 5 6 8.3 0 .5.2.8.3 1.3l.1 1.1c.3 5.7-1.5 6.4-2.7 9.8-1.9 4.3-1.4 9 .9 12.7.2.5.4 1 .8 1.4-2.5-16.3 11.1-18.8 13.7-23.9.2-4.4-3.5-7.4-6.4-9.5a14.3 14.3 0 0 0-7.7-2.2zM174 8c-.3 1.5 0 1.1-.1 1.9l-.2 1.7-.4 1.5-.5 1.6-.8 1.5-.5.7-.4.6c-.3.5-.6 1-1 1.3-.3.4-.6.9-1 1.2l-1.3 1c-1.4 1.1-3 1.9-4.3 2.9-.5.3-1 .5-1.3 1-.5.2-.9.6-1.3 1l-1.1 1.2-1 1.3-.9 1.3-.7 1.5-.5 1.5a21 21 0 0 0-.5 1.6l-.1.9-.1.7-.1 1.7v1.1l.3 1.6c0 .6.1 1 .3 1.6l.5 1.5.4 1-14.8-5.8-7.5-2-4-1a120 120 0 0 0-11.8-1.7h-.4A115.5 115.5 0 0 0 87 34.9l-3 .6c-2 .3-3.9.8-5.7 1.2l-3 .8-2.7 1.2-2.2 1-.3.1-1.8 1-.5.1-2 1-1.2.7-.6.3-1.7 1-1.6 1-1.3.9-.1.1-1.3 1H58l-1 .8-.4.3-1 .8c0 .2-.1.2-.2.3l-1.2 1v.2c-.5.3-.9.7-1.2 1.1l-.2.1-1 1c0 .2-.3.3-.4.5l-1 1.1-.4.3-1.4 1.6-.2.2a38.1 38.1 0 0 1-7 6 48.9 48.9 0 0 1-12.1 6c-2.7.5-5.5 1.6-7.9 1.8l-1.6.2-1.6.4-1.6.6-1.5.7-1.4.9c-.5.3-1 .7-1.3 1.1-.5.3-1 .8-1.3 1.2l-1.1 1.3-1 1.4-.9 1.5-.7 1.7-.6 1.7-.3 1.5v.2L6 86.2v2.1a6.9 6.9 0 0 0 .7 2.4l.7 1.2.8 1.2a17.1 17.1 0 0 0 2.4 2c1.5 1.4 1.9 1.9 3.9 2.9l1 .5h.2v.4a13.3 13.3 0 0 0 1 3.1l.5 1.2.1.3a28.3 28.3 0 0 0 1.8 2.8l1 1.2 1.3 1.1h.1a14.2 14.2 0 0 0 5.4 3l.3.1.8.2c-.2 3.5-.3 6.8.3 8 .5 1.2 3.4-2.7 6.2-7.2-.4 4.4-.6 9.7 0 11.2.7 1.6 4.6-3.4 8-9a74.7 74.7 0 0 1 92 65.8c-.8-7-9.4-10.8-13.4-9.9-2 4.8-5.2 11-10.5 14.8.4-4.3.2-8.7-.7-13-1.4 6-4.2 11.5-8 16.3a18 18 0 0 1-15.5-7l-.5-.8-.5-1.4-.4-1.3V176c0-.5.1-1 .3-1.4 0-.4.2-.9.4-1.3l.8-1.4c1-3 1-5.6-1-7l-1.1-.7-.9-.3-.5-.2-1.4-.3a5 5 0 0 0-1.3-.2l-1.4-.1h-1l-1.4.2-1.4.3-1.3.4-1.3.6-1.3.7c-15 9.8-6 32.8 4.2 39.5-3.8.7-7.8 1.5-8.9 2.3l-.1.2a60.9 60.9 0 0 0 19.2 7.4 61.5 61.5 0 0 0 72.6-51.3l.4 1.7c.2 1.2.5 2.4.6 3.7l.2 1.7v.3l.2 1.6.1 2.2v5.4l-.1.8v1.5c-.2.2-.2.4-.2.5 0 .6 0 1-.2 1.5v.6c0 .7-.2 1.2-.3 1.9v.1l-.4 1.8v.2c0 .6-.2 1.2-.4 1.8v.2l-.5 1.8v.2l-.5 1.8v.1l-.6 2-.7 1.8-.8 1.9-.7 1.9c-.4.5-.6 1.2-1 1.8l-.1.4s0 .2-.2.2a61.2 61.2 0 0 1-18.1 21.7l-1.6 1.1c0 .2-.3.2-.4.4l-1.4 1 .2.3 2.7-.4h.1a137.7 137.7 0 0 0 6.5-1.2l.9-.2 1.3-.3 1.2-.3c6.4-1.5 12.7-3.7 18.7-6.2-10.2 14-24 25.3-40.1 32.8a103.2 103.2 0 0 0 83.1-52.6c-2.7 15-8.6 29.1-17.4 41.5a101.7 101.7 0 0 0 44.5-69.2c2.2 10.2 2.8 20.7 1.8 31.1 46.7-65 4-132.5-14-150.3l-.1-.3v.1l-.1-.1-.2 2.3a87 87 0 0 1-.6 4.3l-1.1 4.3a53.7 53.7 0 0 1-3.5 8 44 44 0 0 1-9.9 12l-1.5 1.4a36 36 0 0 1-7.4 4.7l-4 1.8a45.5 45.5 0 0 1-8.6 2.3l-4.4.6a49.7 49.7 0 0 1-11.9-.8l-4.3-1.1a48 48 0 0 0 20.7-6.8l3.6-2.6 3.3-2.9 3-3.2c1-1.1 1.9-2.3 2.7-3.5.2-.1.3-.4.4-.6l1.9-3.1a44.5 44.5 0 0 0 3.5-8c.4-1.4.8-2.9 1-4.3.3-1.5.6-2.9.7-4.3l.3-4.4-.1-3.1-.6-4.3c-.2-1.5-.5-3-1-4.4-.4-1.3-.8-2.7-1.4-4.1-.5-1.4-1.1-2.7-1.8-4l-2.2-3.8a71.3 71.3 0 0 0-5.5-6.9 40.4 40.4 0 0 0-12-8.6C178 9.3 176 8.6 174 8z" fill="#e0234e" fillRule="evenodd" /></svg>
          </div>
          </a>
          <a data-tip='MySQL' className='tooltip' href="https://www.mysql.com/" target='_blank'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
            <svg  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252">
              <path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B" />
              <path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B" />
            </svg>
</div>
          </a>
          <a data-tip='MongoDB' className='tooltip' href="https://www.mongodb.com/en" target='_blank'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
            <svg   viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg"  height={70} preserveAspectRatio="xMidYMid"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z" /></svg>
          </div>
        </a>
          <a data-tip='NextJS' className='tooltip' href="https://nextjs.org/" target='_blank'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
            <img src="./icons/nextjs_icon_dark.svg" alt="nextjs" data-tip='Next.js' />
          </div>
          </a>
        </div>
      </div>
      </Fade>
      {/* TARJETA Tools */}
      <Fade triggerOnce={true} delay={100} duration={1500}>
      <div className="bg-emerald-900 bg-opacity-30 group hover:bg-emerald-900 hover:bg-opacity-70 transition-all px-2 pb-4 min-w-52 h-full rounded-2xl flex flex-col">
        <h1 className='text-xl tablet:text-2xl p-3 group-hover:tracking-widest tracking-wide transition-all'>Tools ands hosts</h1>
        <div  className='flex items-center align-center justify-evenly flex-wrap gap-2'>
          <a data-tip='Git' className='tooltip' href="https://git-scm.com/" target='_blank'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
            <svg   xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
              <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36" />
            </svg>
          </div>
          </a>
          <a data-tip='GitHub' className='tooltip' href="https://github.com/" target='_blank'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
            <svg  
              viewBox="0 0 256 250"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
            </svg>
          </div>
          </a>
          <a data-tip='Jest' className='tooltip' href="https://jestjs.io/" target='_blank'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
            <img src="./icons/jest.svg" alt="" />
          </div>
          </a>
          <a data-tip='Vscode' className='tooltip' href="https://code.visualstudio.com/" target='_blank'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
            <img src="./icons/vscode.svg" alt="" />
            </div>
          </a>
          <a data-tip='Vercel' className='tooltip' href="https://vercel.com/gasteacs-projects" target='_blank'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
            <svg   viewBox="0 0 256 222" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#fff" d="m128 0 128 221.705H0z" /></svg>          </div>
          </a>
          <a data-tip='Railway' className='tooltip' href="https://railway.app/" target='_blank'>
          <div className='scale-[0.7] hover:scale-[0.8] laptop:hover:scale-110 phone:scale-75 phone:hover:scale-90 laptop:scale-90 transition-all h-[76px] w-[76px] p-2 flex items-center justify-center'>
            <svg   fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M4.8 438.2A520.7 520.7 0 000 489.7h777.8c-2.7-5.3-6.4-10-10-14.7-133-171.8-204.5-157-306.9-161.3-34-1.4-57.2-2-193-2-72.7 0-151.7.2-228.6.4A621 621 0 0015 386.3h398.6v51.9H4.8zm779.1 103.5H.4c.8 13.8 2.1 27.5 4 41h723.4c32.2 0 50.3-18.3 56.1-41zM45 724.3s120 294.5 466.5 299.7c207 0 385-123 465.9-299.7H45z" fill="#fff" /><path d="M511.5 0A512.2 512.2 0 0065.3 260.6l202.7-.2c158.4 0 164.2.6 195.2 2l19.1.6c66.7 2.3 148.7 9.4 213.2 58.2 35 26.5 85.6 85 115.7 126.5 27.9 38.5 35.9 82.8 17 125.2-17.5 39-55 62.2-100.4 62.2H16.7s4.2 18 10.6 37.8h970.6a510.4 510.4 0 0026.1-160.7A512.4 512.4 0 00511.5 0z" fill="#fff" /></svg>         </div>
        </a>
        </div>
      </div>
      </Fade>
    </div>

  )
}
