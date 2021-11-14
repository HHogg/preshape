precision mediump float;

uniform float u_face;
uniform float u_scale_0;
uniform float u_scale_1;
uniform float u_t_enter;
uniform float u_t_exit;
uniform float u_t_update;
uniform float u_t_view;
uniform vec3 u_translate0;
uniform vec3 u_translate1;
uniform mat3 u_projection;

attribute float a_height_0;
attribute float a_height_1;
attribute float a_scale_0;
attribute float a_scale_1;
attribute float a_width_0;
attribute float a_width_1;
attribute vec2 a_offset_0;
attribute vec2 a_offset_1;
attribute vec3 a_color_start;
attribute vec3 a_color_stop;
attribute vec3 a_position;

varying vec3 fragColor;

void main() {
  float view_scale_n = mix(u_scale_0, u_scale_1, u_t_view);
  vec3 view_translate_v = mix(u_translate0, u_translate1, u_t_view);
  mat3 view_scale = mat3(view_scale_n, 0, 0, 0, view_scale_n, 0, 0, 0, 1);

  float scale_n = mix(a_scale_0, a_scale_1, u_t_enter);

  if (a_scale_1 == 0.0) {
    scale_n = mix(a_scale_0, a_scale_1, u_t_exit);
  }

  float height = mix(a_height_0, a_height_1, u_t_update);
  float width = mix(a_width_0, a_width_1, u_t_update);
  vec2 offset = mix(a_offset_0, a_offset_1, u_t_update);
  vec3 origin = vec3(width * -0.5, height * -0.5, 0);
  vec3 transalte = vec3(offset[0], offset[1], 0);
  vec3 position = vec3(a_position[0], a_position[1], 0);
  mat3 scale = mat3(scale_n, 0, 0, 0, scale_n, 0, 0, 0, 1);

  gl_Position = vec4(
    u_projection *
    view_scale *
    (((scale * (position + origin)) - origin + transalte) - view_translate_v)
  , 1);
}
