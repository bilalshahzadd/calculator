import React, { useState } from 'react';
import { useMantineTheme, Paper, Button, TextInput } from '@mantine/core';
import { createStyles, MantineProvider } from '@mantine/styles';

const useStyles = createStyles((theme) => ({
    calculator: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: theme.spacing.md,
        padding: theme.spacing.md,
        textAlign: 'center',
    },
    display: {
        gridColumn: '1 / span 4',
        marginBottom: theme.spacing.md,
        fontSize: theme.fontSizes.xl,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: theme.radius.md,
    },
}));

function Calculator() {
    const [expression, setExpression] = useState('');

    const theme = useMantineTheme();
    const classes = useStyles();

    const handleButtonClick = (value) => {
        setExpression((prevExpression) => prevExpression + value);
    };

    const handleCalculate = () => {
        try {
            const result = eval(expression); // eslint-disable-line no-eval
            setExpression(result.toString());
        } catch (error) {
            setExpression('Error');
        }
    };

    const handleClear = () => {
        setExpression('');
    };

    return (
        <div>
            <MantineProvider>
                <Paper padding="md" shadow="xs">
                    <div className={classes.calculator}>
                        <TextInput
                            value={expression}
                            onChange={(event) => setExpression(event.target.value)}
                            placeholder="0"
                            fullWidth
                            className={classes.display}
                        />

                        <Button onClick={() => handleButtonClick('7')} className={classes.button}>
                            7
                        </Button>
                        <Button onClick={() => handleButtonClick('8')} className={classes.button}>
                            8
                        </Button>
                        <Button onClick={() => handleButtonClick('9')} className={classes.button}>
                            9
                        </Button>
                        <Button onClick={() => handleButtonClick('/')} className={classes.button}>
                            /
                        </Button>

                        <Button onClick={() => handleButtonClick('4')} className={classes.button}>
                            4
                        </Button>
                        <Button onClick={() => handleButtonClick('5')} className={classes.button}>
                            5
                        </Button>
                        <Button onClick={() => handleButtonClick('6')} className={classes.button}>
                            6
                        </Button>
                        <Button onClick={() => handleButtonClick('*')} className={classes.button}>
                            *
                        </Button>

                        <Button onClick={() => handleButtonClick('1')} className={classes.button}>
                            1
                        </Button>
                        <Button onClick={() => handleButtonClick('2')} className={classes.button}>
                            2
                        </Button>
                        <Button onClick={() => handleButtonClick('3')} className={classes.button}>
                            3
                        </Button>
                        <Button onClick={() => handleButtonClick('-')} className={classes.button}>
                            -
                        </Button>

                        <Button onClick={() => handleButtonClick('0')} className={classes.button}>
                            0
                        </Button>
                        <Button onClick={() => handleCalculate()} className={classes.button}>
                            =
                        </Button>
                        <Button onClick={() => handleClear()} className={classes.button}>
                            C
                        </Button>
                        <Button onClick={() => handleButtonClick('+')} className={classes.button}>
                            +
                        </Button>
                    </div>
                </Paper>
            </MantineProvider >
        </div>
    );
}

export default Calculator;
