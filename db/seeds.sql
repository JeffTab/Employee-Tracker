USE company_db;

INSERT INTO department
  (name)
VALUES
  ('Inbound'),
  ('Outbound'),
  ('Human Resources')
  ;

INSERT INTO role
  (title, salary, department_id)
VALUES
  ("Stower", 30000, 1), 
  ("IB Problem Solver", 30000, 1),
  ("IB Amnesty", 30000, 1),
  ("IB Manager", 35000, 1),
  ("Picker", 30000, 2),
  ("OB Problem Solver", 30000, 2),
  ("OB Amnesty", 30000, 2),
  ("OB Manager", 35000, 2),
  ("Human Resources Associate", 32000, 3),
  ("Human Resources Manager", 37000, 3),
  ("Learning Associate", 32000, 3),
  ("Learning Manager", 37000, 3);

INSERT INTO employee
  (first_name, last_name, role_id);
VALUES
  ("Samantha", "Socks", 4),
  ("Christina", "Cats", 8),
  ("Mark", "Math", 10),
  ("Mike", "Microphone", 12),
  ("Fred", "Slacks", 1, 1),
  ("Jean", "Jeans", 1, 1),
  ("Fran", "Phran", 2, 1),
  ("Jarl", "Yarl", 2, 1),
  ("Jeff", "Toots", 3, 1),
  ("Jan", "Janitor", 3, 1),
  ("Albert", "Artichoke", 5, 2),
  ("Babs", "Butts", 5, 2),
  ("Chris", "Christianson", 6, 2),
  ("Danny", "Denver", 6, 2),
  ("Tara", "Traffic", 7, 2),
  ("Trip", "Trap", 7, 2),
  ("Melinda", "Marlboro", 9, 3),
  ("Mancy", "Hess", 9, 3),
  ("Charlie", "Car", 11, 3),
  ("Mary", "Potato", 11, 3);