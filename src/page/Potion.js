import React from "react";
import { Card, Table } from "react-bootstrap";

const Potion = () => {
  const level = [200];
  const limit = [
    47.774, 47.301, 46.833, 46.369, 45.91, 45.455, 45.005, 44.56, 44.118,
    43.682, 21.625, 21.41, 21.198, 20.989, 20.781, 20.575, 20.371, 20.17, 19.97,
    19.772, 9.788, 9.691, 9.595, 9.5, 9.406, 4.657, 4.233, 3.848, 3.499, 3.181,
    1.575, 1.431, 1.301, 1.183, 1.075, 0.532, 0.484, 0.44, 0.4, 0.364, 0.18,
    0.164, 0.149, 0.135, 0.123, 0.061, 0.055, 0.005, 0.046, 0.03,
  ];

  const Typhoon = [
    62.5, 60.68, 58.912, 57.196, 55.53, 42.716, 41.472, 40.264, 39.091, 37.952,
    18.131, 17.952, 17.774, 17.598, 17.424, 17.251, 17.081, 16.911, 16.744,
    16.578, 8.207, 8.126, 8.045, 7.966, 7.887, 7.809, 7.731, 7.655, 7.579,
    7.504, 3.715, 3.678, 3.642, 3.606, 3.57, 1.767, 1.607, 1.461, 1.328, 1.207,
    0.598, 0.543, 0.494, 0.449, 0.408, 0.202, 0.184, 0.167, 0.152, 0.138, 0.068,
    0.062, 0.056, 0.051, 0.047, 0.023, 0.021, 0.019, 0.017, 0.012,
  ];

  const extreme3 = [
    62.5, 60.68, 58.912, 57.196, 55.53, 42.716, 41.472, 40.264, 39.091, 37.952,
    23.72, 23.029, 22.359, 21.707, 21.075, 16.212, 15.739, 15.281, 14.836,
    14.404, 9.002, 8.74, 8.486, 8.238, 7.999, 7.766, 7.539, 7.32, 7.107, 6.9,
    3.115, 3.084, 3.053, 3.023, 2.993, 2.964, 2.934, 2.905, 2.876, 2.848, 1.41,
    1.396, 1.382, 1.368, 1.355, 0.671, 0.61, 0.554, 0.504, 0.458, 0.227, 0.206,
    0.187, 0.17, 0.155, 0.077, 0.07, 0.063, 0.058, 0.052, 0.026, 0.024, 0.021,
    0.019, 0.018, 0.009, 0.008, 0.007, 0.007, 0.004,
  ];

  const extreme2 = [
    62.5, 58.411, 54.59, 51.019, 47.681, 36.678, 34.931, 33.268, 31.684, 30.175,
    18.859, 18.31, 17.777, 17.259, 16.756, 12.889, 12.514, 12.149, 11.796,
    11.452, 7.158, 6.949, 6.747, 6.55, 6.359, 4.892, 4.749, 4.611, 4.477, 4.346,
    2.716, 2.637, 2.561, 2.486, 2.414, 2.343, 2.275, 2.209, 2.144, 2.082, 0.94,
    0.931, 0.92, 0.912, 0.903, 0.894, 0.885, 0.877, 0.868, 0.859, 0.425, 0.421,
    0.417, 0.413, 0.409, 0.202, 0.184, 0.167, 0.152, 0.138, 0.0068, 0.062,
    0.057, 0.051, 0.047, 0.023, 0.021, 0.019, 0.017, 0.016, 0.008, 0.007, 0.006,
    0.006, 0.005, 0.003, 0.002, 0.002, 0.002, 0.001,
  ];

  const extreme1 = [
    62.5, 56.306, 5.0726, 45.699, 41.171, 31.67, 29.055, 26.656, 24.455, 22.436,
    14.022, 13.105, 12.248, 11.446, 10.698, 8.229, 7.837, 7.464, 7.108, 6.77,
    4.231, 4.108, 3.988, 3.872, 3.759, 2.892, 2.808, 2.726, 2.646, 2.569, 1.606,
    1.559, 1.514, 1.47, 1.427, 1.098, 1.066, 1.035, 1.004, 0.975, 0.609, 0.592,
    0.574, 0.558, 0.541, 0.526, 0.51, 0.496, 0.481, 0.467, 0.211, 0.209, 0.207,
    0.205, 0.203, 0.201, 0.199, 0.197, 0.195, 0.193, 0.095, 0.095, 0.094, 0.093,
    0.092, 0.045, 0.041, 0.038, 0.034, 0.031, 0.015, 0.014, 0.013, 0.012, 0.01,
    0.005, 0.005, 0.004, 0.004, 0.004, 0.002, 0.002, 0.001, 0.001, 0.001, 0.001,
    0.001,
  ];

  const extreme0 = [
    25.877, 23.105, 20.629, 18.419, 16.445, 14.683, 13.11, 11.706, 10.451,
    9.332, 5.832, 5.254, 4.734, 4.264, 3.842, 2.955, 2.711, 2.487, 2.282, 2.094,
    1.308, 1.223, 1.143, 1.068, 0.998, 0.768, 0.731, 0.696, 0.663, 0.632, 0.395,
    0.383, 0.372, 0.361, 0.351, 0.27, 0.262, 0.254, 0.247, 0.24, 0.15, 0.145,
    0.141, 0.137, 0.133, 0.102, 0.099, 0.097, 0.094, 0.091, 0.057, 0.055, 0.054,
    0.052, 0.051, 0.049, 0.048, 0.046, 0.045, 0.044, 0.02, 0.019, 0.019, 0.019,
    0.019, 0.019, 0.019, 0.018, 0.018, 0.018, 0.009, 0.009, 0.009, 0.009, 0.009,
    0.004, 0.004, 0.004, 0.003, 0.003, 0.001, 0.001, 0.001, 0.001, 0.001,
  ];

  return (
    <div>
      <Card>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>성장의 비약</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>레벨</th>
                <th>극성비</th>
                <th>태성비</th>
                <th>209 비약</th>
                <th>219 비약</th>
                <th>229 비약</th>
                <th>익성비</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 100 }).map((_, index) => (
                <tr>
                  <td key={index}>{level[0] + index}</td>
                  <td key={index}>{index < 50 ? 100 : limit[index - 50]}%</td>
                  <td key={index}>{index < 40 ? 100 : Typhoon[index - 40]}%</td>
                  <td key={index}>
                    {index < 30 ? 100 : extreme3[index - 30]}%
                  </td>
                  <td key={index}>
                    {index < 20 ? 100 : extreme2[index - 20]}%
                  </td>
                  <td key={index}>
                    {index < 10 ? 100 : index > 96 ? 0 : extreme1[index - 10]}%
                  </td>
                  <td key={index}>{index > 84 ? 0 : extreme0[index]}%</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Potion;
