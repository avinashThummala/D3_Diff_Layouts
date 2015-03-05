**Design:**

<p>
My design is based on a Matrix plot. The Y-axis represents the selected list of countries and the ticks on the X-axis cover the complete list of country names. The data associated with (x,y) position of the matrix is '0' (Case 1), if the country associated with 'x' (Let it be cX) isn't among the top partners of the country associated with 'y' (Let it be cY), otherwise it represents the export volume from 'cY' to 'cX' (Case 2).
</p>

<p>
In the first case, we fill a 'Square' of specific dimension with 'White' color. The design is responsive, so the dimension of the square is calculated on the fly. In the second case discussed above, we fill a 'Square' of the same dimension with a color obtained by interpolating the colors 'Blue' (Associated with the minimum export volumne) and 'Red' (Associated with the maximum export volume) using a Linear scale.
</p>