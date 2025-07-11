import pool from '../config/db.js';

export const getAllStudents = async (req, res) => {
  try {
    const students = await pool.query('SELECT * FROM students ORDER BY id');
    res.status(200).json(students.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};

export const createStudent = async (req, res) => {
  const { name, roll_no, department } = req.body;
  try {
    const student = await pool.query(
      'INSERT INTO students (name, roll_no, department) VALUES ($1, $2, $3) RETURNING *',
      [name, roll_no, department]
    );
    res.status(201).json(student.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create student' });
  }
};

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, roll_no, department } = req.body;
  try {
    const result = await pool.query(
      'UPDATE students SET name = $1, roll_no = $2, department = $3 WHERE id = $4 RETURNING *',
      [name, roll_no, department, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update student' });
  }
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM students WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete student' });
  }
};
