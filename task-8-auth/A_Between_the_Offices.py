import sys
from bisect import bisect_left, bisect_right
from collections import defaultdict, deque, Counter
from random import randint
from types import GeneratorType

# ---------- FAST IO ----------
input = sys.stdin.readline
def output(s): sys.stdout.write(s)

def Int(): return int(input())
def Str(): return input().strip()
def numbers(): return list(map(int, input().split()))
def words(): return input().split()

# ---------- RANDOM ----------
rand = randint(1, 10**5)

# ---------- DIRECTION VECTORS ----------
DIR8 = [(-1,-1), (-1,0), (-1,1), (0,-1), (0,1), (1,-1), (1,0), (1,1)]
DIR4 = [(-1,0), (1,0), (0,-1), (0,1)]

# def inbound(r, c, R, C): return 0 <= r < R and 0 <= c < C

# ---------- UNION FIND / DSU ----------
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n+1))
        self.size = [1] * (n+1)

    def find(self, x):
        while x != self.parent[x]:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x

    def union(self, x, y):
        x, y = self.find(x), self.find(y)
        if x == y: return
        if self.size[x] < self.size[y]:
            x, y = y, x
        self.parent[y] = x
        self.size[x] += self.size[y]

# ---------- BOOTSTRAP FOR RECURSION ----------
def bootstrap(f):
    def wrapped(*args, **kwargs):
        callstack = []
        gen = f(*args, **kwargs)
        while True:
            if isinstance(gen, GeneratorType):
                callstack.append(gen)
                gen = next(gen)
            else:
                callstack.pop()
                if not callstack:
                    return gen
                gen = callstack[-1].send(gen)
    return wrapped

# ---------- SOLUTION FUNCTION ----------
def solve():

    return 

# ---------- MAIN ----------
if __name__ == "__main__":
    t = 1
    # t = Int()
    for _ in range(t):
        print(solve())
