# Python program to multpliply two
# csc matrices using multiply()

# Import required libraries
import numpy as np
from scipy.sparse import csc_matrix

# Create first csc matrix A
row_A = np.array([0, 0, 1, 2 ])
col_A = np.array([0, 1, 0, 1])
data_A = np.array([4, 3, 8, 9])

cscMatrix_A = csc_matrix((data_A,
                          (row_A, col_A)),
                         shape = (3, 3))

# print first csc matrix
print("first csc matrix: \n",
      cscMatrix_A.toarray())

# Create second csc matrix B
row_B = np.array([0, 1, 1, 2 ])
col_B = np.array([0, 0, 1, 0])
data_B = np.array([7, 2, 5, 1])

cscMatrix_B = csc_matrix((data_B, (row_B, col_B)),
                         shape = (3, 3))

# print second csc matrix
print("second csc matrix:\n", cscMatrix_B.toarray())

# Multiply these matrices
sparseMatrix_AB = cscMatrix_A.multiply(cscMatrix_B)

# print resultant matrix
print("Product Sparse Matrix:\n",
      sparseMatrix_AB.toarray())
