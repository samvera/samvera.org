import { register } from "swiper/element/bundle";

export function registerSwiper() {
  let isRegistered = false;
  if (!isRegistered) {
    register();
    isRegistered = true;
  }
}
