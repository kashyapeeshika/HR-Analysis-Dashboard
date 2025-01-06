import React from 'react';

const OpenPosition = () => {
  return (
    <div className="row">
      <div className="table-responsive">
        <table className="table table-striped table-info table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Department</th>
              <th scope="col">Open Position</th>
              <th scope="col">Position Level</th>
              <th scope="col">Salary</th>
              <th scope="col">No. of Openings</th>
              <th scope="col">Required Experience (Years)</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <th scope="row">1</th>
              <td>Data Science</td>
              <td>Data Analyst</td>
              <td>Mid-level</td>
              <td>700k</td>
              <td>3</td>
              <td>2-4</td>
              <td>Mumbai</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Marketing</td>
              <td>Marketing Manager</td>
              <td>Senior</td>
              <td>1,200k</td>
              <td>2</td>
              <td>5-7</td>
              <td>Delhi</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Sales</td>
              <td>Sales Executive</td>
              <td>Junior</td>
              <td>500k</td>
              <td>4</td>
              <td>1-3</td>
              <td>Hyderabad</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Human Resources</td>
              <td>HR Specialist</td>
              <td>Entry Level</td>
              <td>600k</td>
              <td>1</td>
              <td>2-3</td>
              <td>Pune</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Engineering</td>
              <td>Product Manager</td>
              <td>Senior</td>
              <td>1,500k</td>
              <td>2</td>
              <td>5-8</td>
              <td>Bengaluru</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Finance</td>
              <td>Business Analyst</td>
              <td>Mid-level</td>
              <td>900k</td>
              <td>3</td>
              <td>3-5</td>
              <td>Chennai</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Research & Development</td>
              <td>Research Scientist</td>
              <td>Senior</td>
              <td>1,000k</td>
              <td>2</td>
              <td>4-6</td>
              <td>Pune</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OpenPosition;
