// ------------------------------------------------------------------------------------------

'use client';

// ------------------------------------------------------------------------------------------

import { FC, JSX, useMemo, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

import { Box, Button, Card, Container, Divider, Grid, Stack, Typography } from '@mui/material';

// ------------------------------------------------------------------------------------------

type Mark = 'X' | 'O' | null;
type Board = Mark[];

interface Result {
    winner: Mark;
    line: number[] | null;
    isDraw: boolean;
}

// ------------------------------------------------------------------------------------------

const LINES: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// ------------------------------------------------------------------------------------------

const initialBoard = (): Board => Array(9).fill(null);

const getResult = (board: Board): Result => {
    for (const line of LINES) {
        const [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return { winner: board[a], line, isDraw: false };
        }
    }
    const isDraw = board.every(Boolean);
    return { winner: null, line: null, isDraw };
};

const nextMark = (mark: Mark): Exclude<Mark, null> => (mark === 'X' ? 'O' : 'X');

// ------------------------------------------------------------------------------------------

const TicTacToe: FC = (): JSX.Element => {
    const { width, height } = useWindowSize();
    const [board, setBoard] = useState<Board>(initialBoard);
    const [current, setCurrent] = useState<Exclude<Mark, null>>('X');
    const [scores, setScores] = useState<{ X: number; O: number }>({ X: 0, O: 0 });
    const [round, setRound] = useState<number>(1);
    const [showConfetti, setShowConfetti] = useState(false);
    const [pieces, setPieces] = useState(0);

    const result = useMemo(() => getResult(board), [board]);

    const handleCellClick = (idx: number) => {
        if (board[idx] || result.winner || result.isDraw) return;
        const next = [...board];
        next[idx] = current;
        setBoard(next);

        const r = getResult(next);

        if (r.winner) {
            navigator.vibrate?.([200, 100, 200]);
            setScores((s) => ({
                ...s,
                [r.winner as 'X' | 'O']: s[r.winner as 'X' | 'O'] + 1,
            }));

            setShowConfetti(true);
            setPieces(1000);

            setTimeout(() => {
                setPieces(0);

                setTimeout(() => {
                    setShowConfetti(false);
                }, 4000);
            }, 2000);
        } else if (r.isDraw) {
            navigator.vibrate?.(300);
        } else {
            navigator.vibrate?.(100);
            setCurrent(nextMark(current));
        }
    };

    const handleNewRound = () => {
        setBoard(initialBoard());
        if (result.winner) {
            setCurrent(result.winner === 'X' ? 'O' : 'X');
        } else {
            setCurrent(round % 2 === 0 ? 'X' : 'O');
        }
        setRound((r) => r + 1);
    };

    const handleResetMatch = () => {
        setBoard(initialBoard());
        setScores({ X: 0, O: 0 });
        setCurrent('X');
        setRound(1);
    };

    const renderStatus = () => {
        if (result.winner) {
            return `Player ${result.winner} wins!`;
        }
        if (result.isDraw) {
            return `It's a draw.`;
        }
        return `Player ${current}'s turn`;
    };

    return (
        <>
            <Box
                component='section'
                sx={{
                    borderTopWidth: '1px',
                    borderTopStyle: 'solid',
                    borderTopColor: 'divider',
                }}
            >
                <Container
                    sx={{
                        py: { xs: 8, sm: 12 },
                    }}
                >
                    <Grid
                        container
                        spacing={{ xs: 4, sm: 6 }}
                    >
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Stack
                                spacing={{ xs: 2, sm: 3 }}
                                direction='column'
                            >
                                <Typography
                                    component='h2'
                                    variant='h2'
                                    sx={{
                                        color: 'text.primary',
                                        fontSize: { xs: 32, sm: 56 },
                                        fontWeight: 500,
                                    }}
                                >
                                    Tic-Tac-Toe
                                </Typography>
                                <Typography
                                    variant='body2'
                                    sx={{
                                        color: 'text.secondary',
                                    }}
                                >
                                    Local Multiplayer: Two players alternate turns on the same
                                    device.
                                </Typography>
                                <Card
                                    elevation={0}
                                    sx={{
                                        borderRadius: 4,
                                        p: { xs: 2, sm: 3 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        flexWrap: 'wrap',
                                        gap: 2,
                                    }}
                                >
                                    <Stack
                                        direction='row'
                                        spacing={4}
                                        alignItems='center'
                                    >
                                        <Stack spacing={0}>
                                            <Typography
                                                variant='body2'
                                                sx={{ color: 'text.secondary' }}
                                            >
                                                Round
                                            </Typography>
                                            <Typography variant='h6'>{round}</Typography>
                                        </Stack>
                                        <Divider
                                            orientation='vertical'
                                            flexItem
                                        />
                                        <Stack spacing={0}>
                                            <Typography
                                                variant='body2'
                                                sx={{ color: 'text.secondary' }}
                                            >
                                                Player X
                                            </Typography>
                                            <Typography variant='h6'>{scores.X}</Typography>
                                        </Stack>
                                        <Stack spacing={0}>
                                            <Typography
                                                variant='body2'
                                                sx={{ color: 'text.secondary' }}
                                            >
                                                Player O
                                            </Typography>
                                            <Typography variant='h6'>{scores.O}</Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                    >
                                        <Button
                                            variant='outlined'
                                            onClick={handleResetMatch}
                                            sx={{ borderRadius: 8, textTransform: 'unset' }}
                                        >
                                            Reset match
                                        </Button>
                                        <Button
                                            variant='contained'
                                            onClick={handleNewRound}
                                            disabled={!result.winner && !result.isDraw}
                                            sx={{ borderRadius: 8, textTransform: 'unset' }}
                                        >
                                            New round
                                        </Button>
                                    </Stack>
                                </Card>
                                <Card
                                    elevation={0}
                                    sx={{
                                        borderRadius: 4,
                                        p: { xs: 2, sm: 3 },
                                    }}
                                >
                                    <Typography
                                        variant='subtitle1'
                                        sx={{ fontWeight: 600, mb: 1 }}
                                    >
                                        How it works
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        Two players share the device. Player X starts. Tap an empty
                                        cell to place your mark. First to align three marks (row,
                                        column, or diagonal) wins. Use “New round” after a win or
                                        draw, or “Reset match” to clear scores.
                                    </Typography>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Stack
                                spacing={{ xs: 2, sm: 3 }}
                                direction='column'
                            >
                                <Typography
                                    variant='h6'
                                    sx={{
                                        color: result.winner
                                            ? 'success.main'
                                            : result.isDraw
                                              ? 'warning.main'
                                              : 'text.primary',
                                        fontWeight: 500,
                                    }}
                                >
                                    {renderStatus()}
                                </Typography>
                                <Box
                                    sx={{
                                        mx: 'auto',
                                        aspectRatio: '1',
                                    }}
                                >
                                    <Grid
                                        container
                                        columns={3}
                                        spacing={1}
                                        sx={{ height: '100%' }}
                                    >
                                        {board.map((value, idx) => {
                                            const isWinningCell =
                                                !!result.line && result.line.includes(idx);

                                            return (
                                                <Grid
                                                    key={idx}
                                                    size={1}
                                                >
                                                    <Button
                                                        onClick={() => handleCellClick(idx)}
                                                        disabled={
                                                            Boolean(value) ||
                                                            Boolean(result.winner) ||
                                                            result.isDraw
                                                        }
                                                        sx={{
                                                            width: '100%',
                                                            height: '100%',
                                                            borderRadius: 4,
                                                            borderWidth: 2,
                                                            borderStyle: 'solid',
                                                            borderColor: isWinningCell
                                                                ? 'success.main'
                                                                : 'divider',
                                                            backgroundColor: 'background.paper',
                                                            transition:
                                                                'transform 120ms ease, box-shadow 120ms ease',
                                                            boxShadow: isWinningCell ? 3 : 0,
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                fontSize: { xs: 40, sm: 56 },
                                                                fontWeight: 700,
                                                                color: isWinningCell
                                                                    ? 'success.main'
                                                                    : value === 'X'
                                                                      ? 'primary.main'
                                                                      : value === 'O'
                                                                        ? 'secondary.main'
                                                                        : 'text.primary',
                                                            }}
                                                        >
                                                            {value ?? <>&nbsp;</>}
                                                        </Typography>
                                                    </Button>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Stack spacing={{ xs: 3, sm: 4 }}></Stack>
                </Container>
            </Box>
            {showConfetti && width > 0 && height > 0 && (
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={pieces}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 9999,
                    }}
                />
            )}
        </>
    );
};

// ------------------------------------------------------------------------------------------

export default TicTacToe;

// ------------------------------------------------------------------------------------------
