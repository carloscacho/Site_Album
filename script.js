.kitchen-sink-drawer {
  $custom-size: 500px;
  @include bmd-drawer-x-out($custom-size);
  &:not(.bmd-drawer-out) {
    @each $breakpoint in map-keys($grid-breakpoints) {
      @include bmd-drawer-x-in-up($custom-size, $breakpoint);
    }
  }
}
